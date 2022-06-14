// I tried many times to generate invoice using api but call still error 500

// This My request

// Please check again help me

curl --location --request POST 'https://sandbox.101digital.io/invoice-service/2.0.0/invoices' \
--header 'Content-Type: application/json' \
--header 'Operation-Mode: SYNC' \
--header 'org-token: eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIxMDFEIiwiaHR0cDpcL1wvd3NvMi5vcmdcL2NsYWltc1wvYXBwbGljYXRpb25uYW1lIjoiMTAxRFBheUFwcCIsIm1lbWJlcnNoaXBJZCI6IjJkZDc2YzAyLWY3NjgtNGFiZS1hNTNhLTI4NDlmNTM3YjUwOCIsImV4cCI6MTY1NTIzMTYxMSwidXNlcklkIjoiZDIyNThjOGQtOTZiMi00OGU0LTllNGYtMDMxNmUzZjk4MDU5Iiwib3JnSWQiOiI2YmYzMmNjNC0yZGZiLTQwYzYtYmQ0MS1hNmFlYTU1ZmQ0ZGMiLCJsaXN0Um9sZXMiOlsiT3JnYW5pc2F0aW9uT3duZXIiXSwiaHR0cDpcL1wvd3NvMi5vcmdcL2NsYWltc1wvZW50aXR5SWQiOiIxMDFEIn0.VhWvFU46Mdkiq4xS8KRJ4zYueMbQXEOXDZPngimehPI' \
--header 'Authorization: Bearer b47e224d-f3c8-3880-b347-088cf05aedb9' \
--header 'Cookie: JSESSIONID=5CEBF46829E8AFF8A22B224AD2E51453' \
--data-raw '{
"listOfInvoices": [
{
"bankAccount": {
"bankId": "",
"sortCode": "09-01-01",
"accountNumber": "12345678",
"accountName": "John Terry"
},
"customer": {
"firstName": "Nguyen",
"lastName": "Dung 2",
"contact": {
"email": "nguyendung2@101digital.io",
"mobileNumber": "+6597594971"
},
"addresses": [
{
"premise": "CT11",
"countryCode": "VN",
"postcode": "1000",
"county": "hoangmai",
"city": "hanoi"
}
]
},
"documents": [
{
"documentId": "96ea7d60-89ed-4c3b-811c-d2c61f5feab2",
"documentName": "Bill",
"documentUrl": "http://url.com/#123"
}
],
"invoiceReference": "#123456",
"invoiceNumber": "INV123456701",
"currency": "GBP",
"invoiceDate": "2021-05-27",
"dueDate": "2021-06-04",
"description": "Invoice is issued to Akila Jayasinghe",
"customFields": [
{
"key": "invoiceCustomField",
"value": "value"
}
],
"extensions": [
{
"addDeduct": "ADD",
"value": 10,
"type": "PERCENTAGE",
"name": "tax"
},
{
"addDeduct": "DEDUCT",
"type": "FIXED_VALUE",
"value": 10.00,
"name": "discount"
}
],
"items": [
{
"itemReference": "itemRef",
"description": "Honda RC150",
"quantity": 1,
"rate": 1000,
"itemName": "Honda Motor",
"itemUOM": "KG",
"customFields": [
{
"key": "taxiationAndDiscounts_Name",
"value": "VAT"
}
],
"extensions": [
{
"addDeduct": "ADD",
"value": 10,
"type": "FIXED_VALUE",
"name": "tax"
},
{
"addDeduct": "DEDUCT",
"value": 10,
"type": "PERCENTAGE",
"name": "tax"
}
]
}
]
}
]
}
'
