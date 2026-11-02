import Stripe from 'stripe';
const products={tee:{name:'Tiger Tee — sandbox',amount:2500},hoodie:{name:'Hawksbill Hoodie — sandbox',amount:4500}};
export default async function handler(req,res){
 res.setHeader('Cache-Control','no-store');
 if(req.method!=='POST')return res.status(405).json({error:'POST required'});
 const key=process.env.STRIPE_SECRET_KEY;
 if(!key?.startsWith('sk_test_'))return res.status(503).json({error:'Rotated sandbox key required in server environment.'});
 try{
 const site=new URL(process.env.SITE_URL).origin;
 if(req.headers.origin!==site)return res.status(403).json({error:'Origin not allowed'});
 const body=typeof req.body==='string'?JSON.parse(req.body):req.body;
 const p=products[body?.product];
 if(!p||!['S','M','L','XL'].includes(body.size))return res.status(400).json({error:'Invalid product or size'});
 const stripe=new Stripe(key);
 const session=await stripe.checkout.sessions.create({mode:'payment',customer_creation:'always',line_items:[{quantity:1,price_data:{currency:'usd',unit_amount:p.amount,tax_behavior:'exclusive',product_data:{name:p.name+' / '+body.size,metadata:{size:body.size,environment:'sandbox'}}}}],shipping_address_collection:{allowed_countries:['US']},shipping_options:[{shipping_rate_data:{type:'fixed_amount',fixed_amount:{amount:500,currency:'usd'},display_name:'Sandbox shipping — no shipment',tax_behavior:'exclusive'}}],automatic_tax:{enabled:process.env.STRIPE_TAX_ENABLED==='true'},invoice_creation:{enabled:process.env.STRIPE_PAID_INVOICES_ENABLED==='true'},metadata:{environment:'sandbox',project:'suricate'},success_url:site+'/shop.html?returned=1',cancel_url:site+'/shop.html',custom_text:{submit:{message:'Sandbox only. No real order, donation or shipment.'}}});
 return res.status(200).json({url:session.url});
 }catch(e){console.error('Sandbox checkout failed:',e.type||e.name);return res.status(400).json({error:'Check sandbox server configuration and try again.'});}
}
