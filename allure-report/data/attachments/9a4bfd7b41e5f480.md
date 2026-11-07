# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Practice\AutomationTestcases.spec.js >> Test Case 7: Verify Test Cases Page
- Location: Practice\AutomationTestcases.spec.js:236:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.\/test_cases/
Received string:  "https://automationexercise.com/#google_vignette"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    14 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://automationexercise.com/#google_vignette"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8] [cursor=pointer]:
        - /url: /
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic [ref=e47]:
        - heading [level=1] [ref=e48]: AutomationExercise
        - heading [level=2] [ref=e49]: Full-Fledged practice website for Automation Engineers
        - paragraph [ref=e50]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
        - link [ref=e51] [cursor=pointer]:
          - /url: /test_cases
          - button [ref=e52]: Test Cases
        - link [ref=e53] [cursor=pointer]:
          - /url: /api_list
          - button [ref=e54]: APIs list for practice
      - generic [ref=e58]:
        - heading [level=1] [ref=e59]: AutomationExercise
        - heading [level=2] [ref=e60]: Full-Fledged practice website for Automation Engineers
        - paragraph [ref=e61]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
        - link [ref=e62] [cursor=pointer]:
          - /url: /test_cases
          - button [ref=e63]: Test Cases
        - link [ref=e64] [cursor=pointer]:
          - /url: /api_list
          - button [ref=e65]: APIs list for practice
    - link [ref=e68] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e69]: 
    - link [ref=e70] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e71]: 
  - generic [ref=e74]:
    - generic [ref=e76]:
      - heading [level=2] [ref=e77]: Category
      - generic [ref=e78]:
        - heading [level=4] [ref=e81]:
          - link [ref=e82] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e83]: 
            - text: Women
        - heading [level=4] [ref=e87]:
          - link [ref=e88] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e89]: 
            - text: Men
        - heading [level=4] [ref=e93]:
          - link [ref=e94] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e95]: 
            - text: Kids
      - insertion [ref=e98]:
        - generic [ref=e101]:
          - heading [level=2] [ref=e103]: Discover more
          - link [ref=e104] [cursor=pointer]:
            - generic [ref=e105]: Automation practice website
          - link [ref=e109] [cursor=pointer]:
            - generic [ref=e110]: Automation skills training
          - link [ref=e114] [cursor=pointer]:
            - generic [ref=e115]: Automation exercise platform
          - link [ref=e119] [cursor=pointer]:
            - generic [ref=e120]: Test automation tools
          - link [ref=e124] [cursor=pointer]:
            - generic [ref=e125]: Automated testing services
          - link [ref=e129] [cursor=pointer]:
            - generic [ref=e130]: Software testing tutorials
          - link [ref=e134] [cursor=pointer]:
            - generic [ref=e135]: API testing practice
          - link [ref=e139] [cursor=pointer]:
            - generic [ref=e140]: Source Robotics
      - generic [ref=e144]:
        - heading [level=2] [ref=e145]: Brands
        - list [ref=e147]:
          - listitem [ref=e148]:
            - link [ref=e149] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e150]: (6)
              - text: Polo
          - listitem [ref=e151]:
            - link [ref=e152] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e153]: (5)
              - text: H&M
          - listitem [ref=e154]:
            - link [ref=e155] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e156]: (5)
              - text: Madame
          - listitem [ref=e157]:
            - link [ref=e158] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e159]: (3)
              - text: Mast & Harbour
          - listitem [ref=e160]:
            - link [ref=e161] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e162]: (4)
              - text: Babyhug
          - listitem [ref=e163]:
            - link [ref=e164] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e165]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e166]:
            - link [ref=e167] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e168]: (3)
              - text: Kookie Kids
          - listitem [ref=e169]:
            - link [ref=e170] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e171]: (5)
              - text: Biba
    - generic [ref=e172]:
      - generic [ref=e173]:
        - heading [level=2] [ref=e174]: Features Items
        - generic [ref=e176]:
          - generic [ref=e177]:
            - generic [ref=e178]:
              - heading [level=2] [ref=e180]: Rs. 500
              - paragraph [ref=e181]: Blue Top
              - generic [ref=e182] [cursor=pointer]:
                - generic [ref=e183]: 
                - text: Add to cart
            - generic [ref=e184]:
              - heading [level=2] [ref=e185]: Rs. 500
              - paragraph [ref=e186]: Blue Top
              - generic [ref=e187] [cursor=pointer]:
                - generic [ref=e188]: 
                - text: Add to cart
          - list [ref=e190]:
            - listitem [ref=e191]:
              - link [ref=e192] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e193]: 
                - text: View Product
        - generic [ref=e195]:
          - generic [ref=e196]:
            - generic [ref=e197]:
              - heading [level=2] [ref=e199]: Rs. 400
              - paragraph [ref=e200]:
                - text: Men
                - link [ref=e201] [cursor=pointer]:
                  - /url: "#"
                  - text: Tshirt
                - link [ref=e204] [cursor=pointer]: T-Shirts
              - generic [ref=e208] [cursor=pointer]:
                - generic [ref=e209]: 
                - text: Add to cart
            - generic [ref=e210]:
              - heading [level=2] [ref=e211]: Rs. 400
              - paragraph [ref=e212]: Men Tshirt
              - generic [ref=e213] [cursor=pointer]:
                - generic [ref=e214]: 
                - text: Add to cart
          - list [ref=e216]:
            - listitem [ref=e217]:
              - link [ref=e218] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e219]: 
                - text: View Product
        - generic [ref=e221]:
          - generic [ref=e222]:
            - generic [ref=e223]:
              - heading [level=2] [ref=e225]: Rs. 1000
              - paragraph [ref=e226]:
                - text: Sleeveless
                - link [ref=e227] [cursor=pointer]:
                  - /url: "#"
                  - text: Dress
              - generic [ref=e230] [cursor=pointer]:
                - generic [ref=e231]: 
                - text: Add to cart
            - generic [ref=e232]:
              - heading [level=2] [ref=e233]: Rs. 1000
              - paragraph [ref=e234]: Sleeveless Dress
              - generic [ref=e235] [cursor=pointer]:
                - generic [ref=e236]: 
                - text: Add to cart
          - list [ref=e238]:
            - listitem [ref=e239]:
              - link [ref=e240] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e241]: 
                - text: View Product
        - generic [ref=e243]:
          - generic [ref=e244]:
            - generic [ref=e245]:
              - heading [level=2] [ref=e247]: Rs. 1500
              - paragraph [ref=e248]: Stylish Dress
              - generic [ref=e249] [cursor=pointer]:
                - generic [ref=e250]: 
                - text: Add to cart
            - generic [ref=e251]:
              - heading [level=2] [ref=e252]: Rs. 1500
              - paragraph [ref=e253]: Stylish Dress
              - generic [ref=e254] [cursor=pointer]:
                - generic [ref=e255]: 
                - text: Add to cart
          - list [ref=e257]:
            - listitem [ref=e258]:
              - link [ref=e259] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e260]: 
                - text: View Product
        - generic [ref=e262]:
          - generic [ref=e263]:
            - generic [ref=e264]:
              - heading [level=2] [ref=e266]: Rs. 600
              - paragraph [ref=e267]: Winter Top
              - generic [ref=e268] [cursor=pointer]:
                - generic [ref=e269]: 
                - text: Add to cart
            - generic [ref=e270]:
              - heading [level=2] [ref=e271]: Rs. 600
              - paragraph [ref=e272]: Winter Top
              - generic [ref=e273] [cursor=pointer]:
                - generic [ref=e274]: 
                - text: Add to cart
          - list [ref=e276]:
            - listitem [ref=e277]:
              - link [ref=e278] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e279]: 
                - text: View Product
        - generic [ref=e281]:
          - generic [ref=e282]:
            - generic [ref=e283]:
              - heading [level=2] [ref=e285]: Rs. 400
              - paragraph [ref=e286]: Summer White Top
              - generic [ref=e287] [cursor=pointer]:
                - generic [ref=e288]: 
                - text: Add to cart
            - generic [ref=e289]:
              - heading [level=2] [ref=e290]: Rs. 400
              - paragraph [ref=e291]: Summer White Top
              - generic [ref=e292] [cursor=pointer]:
                - generic [ref=e293]: 
                - text: Add to cart
          - list [ref=e295]:
            - listitem [ref=e296]:
              - link [ref=e297] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e298]: 
                - text: View Product
        - generic [ref=e300]:
          - generic [ref=e301]:
            - generic [ref=e302]:
              - heading [level=2] [ref=e304]: Rs. 1000
              - paragraph [ref=e305]: Madame Top For Women
              - generic [ref=e306] [cursor=pointer]:
                - generic [ref=e307]: 
                - text: Add to cart
            - generic [ref=e308]:
              - heading [level=2] [ref=e309]: Rs. 1000
              - paragraph [ref=e310]: Madame Top For Women
              - generic [ref=e311] [cursor=pointer]:
                - generic [ref=e312]: 
                - text: Add to cart
          - list [ref=e314]:
            - listitem [ref=e315]:
              - link [ref=e316] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e317]: 
                - text: View Product
        - generic [ref=e319]:
          - generic [ref=e320]:
            - generic [ref=e321]:
              - heading [level=2] [ref=e323]: Rs. 700
              - paragraph [ref=e324]: Fancy Green Top
              - generic [ref=e325] [cursor=pointer]:
                - generic [ref=e326]: 
                - text: Add to cart
            - generic [ref=e327]:
              - heading [level=2] [ref=e328]: Rs. 700
              - paragraph [ref=e329]: Fancy Green Top
              - generic [ref=e330] [cursor=pointer]:
                - generic [ref=e331]: 
                - text: Add to cart
          - list [ref=e333]:
            - listitem [ref=e334]:
              - link [ref=e335] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e336]: 
                - text: View Product
        - generic [ref=e338]:
          - generic [ref=e339]:
            - generic [ref=e340]:
              - heading [level=2] [ref=e342]: Rs. 499
              - paragraph [ref=e343]: Sleeves Printed Top - White
              - generic [ref=e344] [cursor=pointer]:
                - generic [ref=e345]: 
                - text: Add to cart
            - generic [ref=e346]:
              - heading [level=2] [ref=e347]: Rs. 499
              - paragraph [ref=e348]: Sleeves Printed Top - White
              - generic [ref=e349] [cursor=pointer]:
                - generic [ref=e350]: 
                - text: Add to cart
          - list [ref=e352]:
            - listitem [ref=e353]:
              - link [ref=e354] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e355]: 
                - text: View Product
        - generic [ref=e357]:
          - generic [ref=e358]:
            - generic [ref=e359]:
              - heading [level=2] [ref=e361]: Rs. 359
              - paragraph [ref=e362]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e363] [cursor=pointer]:
                - generic [ref=e364]: 
                - text: Add to cart
            - generic [ref=e365]:
              - heading [level=2] [ref=e366]: Rs. 359
              - paragraph [ref=e367]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e368] [cursor=pointer]:
                - generic [ref=e369]: 
                - text: Add to cart
          - list [ref=e371]:
            - listitem [ref=e372]:
              - link [ref=e373] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e374]: 
                - text: View Product
        - generic [ref=e376]:
          - generic [ref=e377]:
            - generic [ref=e378]:
              - heading [level=2] [ref=e380]: Rs. 278
              - paragraph [ref=e381]: Frozen Tops For Kids
              - generic [ref=e382] [cursor=pointer]:
                - generic [ref=e383]: 
                - text: Add to cart
            - generic [ref=e384]:
              - heading [level=2] [ref=e385]: Rs. 278
              - paragraph [ref=e386]: Frozen Tops For Kids
              - generic [ref=e387] [cursor=pointer]:
                - generic [ref=e388]: 
                - text: Add to cart
          - list [ref=e390]:
            - listitem [ref=e391]:
              - link [ref=e392] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e393]: 
                - text: View Product
        - generic [ref=e395]:
          - generic [ref=e396]:
            - generic [ref=e397]:
              - heading [level=2] [ref=e399]: Rs. 679
              - paragraph [ref=e400]: Full Sleeves Top Cherry - Pink
              - generic [ref=e401] [cursor=pointer]:
                - generic [ref=e402]: 
                - text: Add to cart
            - generic [ref=e403]:
              - heading [level=2] [ref=e404]: Rs. 679
              - paragraph [ref=e405]: Full Sleeves Top Cherry - Pink
              - generic [ref=e406] [cursor=pointer]:
                - generic [ref=e407]: 
                - text: Add to cart
          - list [ref=e409]:
            - listitem [ref=e410]:
              - link [ref=e411] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e412]: 
                - text: View Product
        - generic [ref=e414]:
          - generic [ref=e415]:
            - generic [ref=e416]:
              - heading [level=2] [ref=e418]: Rs. 315
              - paragraph [ref=e419]: Printed Off Shoulder Top - White
              - generic [ref=e420] [cursor=pointer]:
                - generic [ref=e421]: 
                - text: Add to cart
            - generic [ref=e422]:
              - heading [level=2] [ref=e423]: Rs. 315
              - paragraph [ref=e424]: Printed Off Shoulder Top - White
              - generic [ref=e425] [cursor=pointer]:
                - generic [ref=e426]: 
                - text: Add to cart
          - list [ref=e428]:
            - listitem [ref=e429]:
              - link [ref=e430] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e431]: 
                - text: View Product
        - generic [ref=e433]:
          - generic [ref=e434]:
            - generic [ref=e435]:
              - heading [level=2] [ref=e437]: Rs. 478
              - paragraph [ref=e438]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e439] [cursor=pointer]:
                - generic [ref=e440]: 
                - text: Add to cart
            - generic [ref=e441]:
              - heading [level=2] [ref=e442]: Rs. 478
              - paragraph [ref=e443]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e444] [cursor=pointer]:
                - generic [ref=e445]: 
                - text: Add to cart
          - list [ref=e447]:
            - listitem [ref=e448]:
              - link [ref=e449] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e450]: 
                - text: View Product
        - generic [ref=e452]:
          - generic [ref=e453]:
            - generic [ref=e454]:
              - heading [level=2] [ref=e456]: Rs. 1200
              - paragraph [ref=e457]: Little Girls Mr. Panda Shirt
              - generic [ref=e458] [cursor=pointer]:
                - generic [ref=e459]: 
                - text: Add to cart
            - generic [ref=e460]:
              - heading [level=2] [ref=e461]: Rs. 1200
              - paragraph [ref=e462]: Little Girls Mr. Panda Shirt
              - generic [ref=e463] [cursor=pointer]:
                - generic [ref=e464]: 
                - text: Add to cart
          - list [ref=e466]:
            - listitem [ref=e467]:
              - link [ref=e468] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e469]: 
                - text: View Product
        - generic [ref=e471]:
          - generic [ref=e472]:
            - generic [ref=e473]:
              - heading [level=2] [ref=e475]: Rs. 1050
              - paragraph [ref=e476]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e477] [cursor=pointer]:
                - generic [ref=e478]: 
                - text: Add to cart
            - generic [ref=e479]:
              - heading [level=2] [ref=e480]: Rs. 1050
              - paragraph [ref=e481]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e482] [cursor=pointer]:
                - generic [ref=e483]: 
                - text: Add to cart
          - list [ref=e485]:
            - listitem [ref=e486]:
              - link [ref=e487] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e488]: 
                - text: View Product
        - generic [ref=e490]:
          - generic [ref=e491]:
            - generic [ref=e492]:
              - heading [level=2] [ref=e494]: Rs. 1190
              - paragraph [ref=e495]: Cotton Mull Embroidered Dress
              - generic [ref=e496] [cursor=pointer]:
                - generic [ref=e497]: 
                - text: Add to cart
            - generic [ref=e498]:
              - heading [level=2] [ref=e499]: Rs. 1190
              - paragraph [ref=e500]: Cotton Mull Embroidered Dress
              - generic [ref=e501] [cursor=pointer]:
                - generic [ref=e502]: 
                - text: Add to cart
          - list [ref=e504]:
            - listitem [ref=e505]:
              - link [ref=e506] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e507]: 
                - text: View Product
        - generic [ref=e509]:
          - generic [ref=e510]:
            - generic [ref=e511]:
              - heading [level=2] [ref=e513]: Rs. 1530
              - paragraph [ref=e514]: Blue Cotton Indie Mickey Dress
              - generic [ref=e515] [cursor=pointer]:
                - generic [ref=e516]: 
                - text: Add to cart
            - generic [ref=e517]:
              - heading [level=2] [ref=e518]: Rs. 1530
              - paragraph [ref=e519]: Blue Cotton Indie Mickey Dress
              - generic [ref=e520] [cursor=pointer]:
                - generic [ref=e521]: 
                - text: Add to cart
          - list [ref=e523]:
            - listitem [ref=e524]:
              - link [ref=e525] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e526]: 
                - text: View Product
        - generic [ref=e528]:
          - generic [ref=e529]:
            - generic [ref=e530]:
              - heading [level=2] [ref=e532]: Rs. 1600
              - paragraph [ref=e533]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e534] [cursor=pointer]:
                - generic [ref=e535]: 
                - text: Add to cart
            - generic [ref=e536]:
              - heading [level=2] [ref=e537]: Rs. 1600
              - paragraph [ref=e538]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e539] [cursor=pointer]:
                - generic [ref=e540]: 
                - text: Add to cart
          - list [ref=e542]:
            - listitem [ref=e543]:
              - link [ref=e544] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e545]: 
                - text: View Product
        - generic [ref=e547]:
          - generic [ref=e548]:
            - generic [ref=e549]:
              - heading [level=2] [ref=e551]: Rs. 1100
              - paragraph [ref=e552]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e553] [cursor=pointer]:
                - generic [ref=e554]: 
                - text: Add to cart
            - generic [ref=e555]:
              - heading [level=2] [ref=e556]: Rs. 1100
              - paragraph [ref=e557]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e558] [cursor=pointer]:
                - generic [ref=e559]: 
                - text: Add to cart
          - list [ref=e561]:
            - listitem [ref=e562]:
              - link [ref=e563] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e564]: 
                - text: View Product
        - generic [ref=e566]:
          - generic [ref=e567]:
            - generic [ref=e568]:
              - heading [level=2] [ref=e570]: Rs. 849
              - paragraph [ref=e571]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e572] [cursor=pointer]:
                - generic [ref=e573]: 
                - text: Add to cart
            - generic [ref=e574]:
              - heading [level=2] [ref=e575]: Rs. 849
              - paragraph [ref=e576]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e577] [cursor=pointer]:
                - generic [ref=e578]: 
                - text: Add to cart
          - list [ref=e580]:
            - listitem [ref=e581]:
              - link [ref=e582] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e583]: 
                - text: View Product
        - generic [ref=e585]:
          - generic [ref=e586]:
            - generic [ref=e587]:
              - heading [level=2] [ref=e589]: Rs. 1299
              - paragraph [ref=e590]:
                - text: Pure Cotton V-Neck
                - link [ref=e591] [cursor=pointer]:
                  - /url: "#"
                  - text: T-Shirt
              - generic [ref=e594] [cursor=pointer]:
                - generic [ref=e595]: 
                - text: Add to cart
            - generic [ref=e596]:
              - heading [level=2] [ref=e597]: Rs. 1299
              - paragraph [ref=e598]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e599] [cursor=pointer]:
                - generic [ref=e600]: 
                - text: Add to cart
          - list [ref=e602]:
            - listitem [ref=e603]:
              - link [ref=e604] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e605]: 
                - text: View Product
        - generic [ref=e607]:
          - generic [ref=e608]:
            - generic [ref=e609]:
              - heading [level=2] [ref=e611]: Rs. 1000
              - paragraph [ref=e612]: Green Side Placket Detail T-Shirt
              - generic [ref=e613] [cursor=pointer]:
                - generic [ref=e614]: 
                - text: Add to cart
            - generic [ref=e615]:
              - heading [level=2] [ref=e616]: Rs. 1000
              - paragraph [ref=e617]: Green Side Placket Detail T-Shirt
              - generic [ref=e618] [cursor=pointer]:
                - generic [ref=e619]: 
                - text: Add to cart
          - list [ref=e621]:
            - listitem [ref=e622]:
              - link [ref=e623] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e624]: 
                - text: View Product
        - generic [ref=e626]:
          - generic [ref=e627]:
            - generic [ref=e628]:
              - heading [level=2] [ref=e630]: Rs. 1500
              - paragraph [ref=e631]: Premium Polo T-Shirts
              - generic [ref=e632] [cursor=pointer]:
                - generic [ref=e633]: 
                - text: Add to cart
            - generic [ref=e634]:
              - heading [level=2] [ref=e635]: Rs. 1500
              - paragraph [ref=e636]: Premium Polo T-Shirts
              - generic [ref=e637] [cursor=pointer]:
                - generic [ref=e638]: 
                - text: Add to cart
          - list [ref=e640]:
            - listitem [ref=e641]:
              - link [ref=e642] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e643]: 
                - text: View Product
        - generic [ref=e645]:
          - generic [ref=e646]:
            - generic [ref=e647]:
              - heading [level=2] [ref=e649]: Rs. 850
              - paragraph [ref=e650]: Pure Cotton Neon Green Tshirt
              - generic [ref=e651] [cursor=pointer]:
                - generic [ref=e652]: 
                - text: Add to cart
            - generic [ref=e653]:
              - heading [level=2] [ref=e654]: Rs. 850
              - paragraph [ref=e655]: Pure Cotton Neon Green Tshirt
              - generic [ref=e656] [cursor=pointer]:
                - generic [ref=e657]: 
                - text: Add to cart
          - list [ref=e659]:
            - listitem [ref=e660]:
              - link [ref=e661] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e662]: 
                - text: View Product
        - generic [ref=e664]:
          - generic [ref=e665]:
            - generic [ref=e666]:
              - heading [level=2] [ref=e668]: Rs. 799
              - paragraph [ref=e669]: Soft Stretch Jeans
              - generic [ref=e670] [cursor=pointer]:
                - generic [ref=e671]: 
                - text: Add to cart
            - generic [ref=e672]:
              - heading [level=2] [ref=e673]: Rs. 799
              - paragraph [ref=e674]: Soft Stretch Jeans
              - generic [ref=e675] [cursor=pointer]:
                - generic [ref=e676]: 
                - text: Add to cart
          - list [ref=e678]:
            - listitem [ref=e679]:
              - link [ref=e680] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e681]: 
                - text: View Product
        - generic [ref=e683]:
          - generic [ref=e684]:
            - generic [ref=e685]:
              - heading [level=2] [ref=e687]: Rs. 1200
              - paragraph [ref=e688]: Regular Fit Straight Jeans
              - generic [ref=e689] [cursor=pointer]:
                - generic [ref=e690]: 
                - text: Add to cart
            - generic [ref=e691]:
              - heading [level=2] [ref=e692]: Rs. 1200
              - paragraph [ref=e693]: Regular Fit Straight Jeans
              - generic [ref=e694] [cursor=pointer]:
                - generic [ref=e695]: 
                - text: Add to cart
          - list [ref=e697]:
            - listitem [ref=e698]:
              - link [ref=e699] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e700]: 
                - text: View Product
        - generic [ref=e702]:
          - generic [ref=e703]:
            - generic [ref=e704]:
              - heading [level=2] [ref=e706]: Rs. 1400
              - paragraph [ref=e707]: Grunt Blue Slim Fit Jeans
              - generic [ref=e708] [cursor=pointer]:
                - generic [ref=e709]: 
                - text: Add to cart
            - generic [ref=e710]:
              - heading [level=2] [ref=e711]: Rs. 1400
              - paragraph [ref=e712]: Grunt Blue Slim Fit Jeans
              - generic [ref=e713] [cursor=pointer]:
                - generic [ref=e714]: 
                - text: Add to cart
          - list [ref=e716]:
            - listitem [ref=e717]:
              - link [ref=e718] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e719]: 
                - text: View Product
        - generic [ref=e721]:
          - generic [ref=e722]:
            - generic [ref=e723]:
              - heading [level=2] [ref=e725]: Rs. 2300
              - paragraph [ref=e726]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e727] [cursor=pointer]:
                - generic [ref=e728]: 
                - text: Add to cart
            - generic [ref=e729]:
              - heading [level=2] [ref=e730]: Rs. 2300
              - paragraph [ref=e731]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e732] [cursor=pointer]:
                - generic [ref=e733]: 
                - text: Add to cart
          - list [ref=e735]:
            - listitem [ref=e736]:
              - link [ref=e737] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e738]: 
                - text: View Product
        - generic [ref=e740]:
          - generic [ref=e741]:
            - generic [ref=e742]:
              - heading [level=2] [ref=e744]: Rs. 3000
              - paragraph [ref=e745]: Cotton Silk Hand Block Print Saree
              - generic [ref=e746] [cursor=pointer]:
                - generic [ref=e747]: 
                - text: Add to cart
            - generic [ref=e748]:
              - heading [level=2] [ref=e749]: Rs. 3000
              - paragraph [ref=e750]: Cotton Silk Hand Block Print Saree
              - generic [ref=e751] [cursor=pointer]:
                - generic [ref=e752]: 
                - text: Add to cart
          - list [ref=e754]:
            - listitem [ref=e755]:
              - link [ref=e756] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e757]: 
                - text: View Product
        - generic [ref=e759]:
          - generic [ref=e760]:
            - generic [ref=e761]:
              - heading [level=2] [ref=e763]: Rs. 3500
              - paragraph [ref=e764]: Rust Red Linen Saree
              - generic [ref=e765] [cursor=pointer]:
                - generic [ref=e766]: 
                - text: Add to cart
            - generic [ref=e767]:
              - heading [level=2] [ref=e768]: Rs. 3500
              - paragraph [ref=e769]: Rust Red Linen Saree
              - generic [ref=e770] [cursor=pointer]:
                - generic [ref=e771]: 
                - text: Add to cart
          - list [ref=e773]:
            - listitem [ref=e774]:
              - link [ref=e775] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e776]: 
                - text: View Product
        - generic [ref=e778]:
          - generic [ref=e779]:
            - generic [ref=e780]:
              - heading [level=2] [ref=e782]: Rs. 5000
              - paragraph [ref=e783]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e784] [cursor=pointer]:
                - generic [ref=e785]: 
                - text: Add to cart
            - generic [ref=e786]:
              - heading [level=2] [ref=e787]: Rs. 5000
              - paragraph [ref=e788]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e789] [cursor=pointer]:
                - generic [ref=e790]: 
                - text: Add to cart
          - list [ref=e792]:
            - listitem [ref=e793]:
              - link [ref=e794] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e795]: 
                - text: View Product
        - generic [ref=e797]:
          - generic [ref=e798]:
            - generic [ref=e799]:
              - heading [level=2] [ref=e801]: Rs. 1400
              - paragraph [ref=e802]: Lace Top For Women
              - generic [ref=e803] [cursor=pointer]:
                - generic [ref=e804]: 
                - text: Add to cart
            - generic [ref=e805]:
              - heading [level=2] [ref=e806]: Rs. 1400
              - paragraph [ref=e807]: Lace Top For Women
              - generic [ref=e808] [cursor=pointer]:
                - generic [ref=e809]: 
                - text: Add to cart
          - list [ref=e811]:
            - listitem [ref=e812]:
              - link [ref=e813] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e814]: 
                - text: View Product
        - generic [ref=e816]:
          - generic [ref=e817]:
            - generic [ref=e818]:
              - heading [level=2] [ref=e820]: Rs. 1389
              - paragraph [ref=e821]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e822] [cursor=pointer]:
                - generic [ref=e823]: 
                - text: Add to cart
            - generic [ref=e824]:
              - heading [level=2] [ref=e825]: Rs. 1389
              - paragraph [ref=e826]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e827] [cursor=pointer]:
                - generic [ref=e828]: 
                - text: Add to cart
          - list [ref=e830]:
            - listitem [ref=e831]:
              - link [ref=e832] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e833]: 
                - text: View Product
      - generic [ref=e834]:
        - heading [level=2] [ref=e835]: recommended items
        - generic [ref=e836]:
          - generic [ref=e837]:
            - generic [ref=e841]:
              - heading [level=2] [ref=e843]: Rs. 500
              - paragraph [ref=e844]: Blue Top
              - generic [ref=e845] [cursor=pointer]:
                - generic [ref=e846]: 
                - text: Add to cart
            - generic [ref=e850]:
              - heading [level=2] [ref=e852]: Rs. 400
              - paragraph [ref=e853]: Men Tshirt
              - generic [ref=e854] [cursor=pointer]:
                - generic [ref=e855]: 
                - text: Add to cart
            - generic [ref=e859]:
              - heading [level=2] [ref=e861]: Rs. 1000
              - paragraph [ref=e862]: Rs. 1000
              - generic [ref=e863] [cursor=pointer]:
                - generic [ref=e864]: 
                - text: Add to cart
            - generic [ref=e865]:
              - generic [ref=e869]:
                - heading [level=2] [ref=e871]: Rs. 1500
                - paragraph [ref=e872]: Stylish Dress
                - generic [ref=e873] [cursor=pointer]:
                  - generic [ref=e874]: 
                  - text: Add to cart
              - generic [ref=e878]:
                - heading [level=2] [ref=e880]: Rs. 600
                - paragraph [ref=e881]: Winter Top
                - generic [ref=e882] [cursor=pointer]:
                  - generic [ref=e883]: 
                  - text: Add to cart
              - generic [ref=e887]:
                - heading [level=2] [ref=e889]: Rs. 400
                - paragraph [ref=e890]: Summer White Top
                - generic [ref=e891] [cursor=pointer]:
                  - generic [ref=e892]: 
                  - text: Add to cart
          - link [ref=e893] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e894]: 
          - link [ref=e895] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e896]: 
  - insertion [ref=e898]
  - contentinfo [ref=e900]:
    - generic [ref=e905]:
      - heading [level=2] [ref=e906]: Subscription
      - generic [ref=e907]:
        - textbox [ref=e908]:
          - /placeholder: Your email address
        - button [ref=e909] [cursor=pointer]:
          - generic [ref=e910]: 
        - paragraph [ref=e911]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e915]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  148 |     await expect(page.locator(".login-form h2")).toContainText("Login to your account");
  149 | 
  150 |     //5. Enter incorrect email address and password
  151 |     await page.locator(".login-form input:nth-child(2)").fill("sergiomarquine@gmail.com");
  152 |     await page.getByPlaceholder("Password").fill("Sergio Marquine");
  153 | 
  154 |     //6. Click 'login' button
  155 |     await page.getByRole('button', { name: 'Login' }).click();
  156 | 
  157 |     //7. Verify that 'Logged in as username' is visible
  158 |     await expect(page.locator("li:nth-child(10) a:nth-child(1)")).toBeVisible();
  159 | 
  160 |     //8.Click 'Logout' button
  161 |     await page.locator("a[href='/logout']").click();
  162 | 
  163 |     //9.Verify that user is navigated to login page
  164 |     await expect(page).toHaveURL(/.*\/login$/);
  165 | 
  166 | })
  167 | 
  168 | test("Test Case 5: Register User with existing email", async ({ page }) => {
  169 |     //1. Navigate to url 'http://automationexercise.com'
  170 |     await page.goto("http://automationexercise.com");
  171 | 
  172 |     //2. Verify that home page is visible successfully
  173 |     expect(await page.title()).toContain("Automation Exercise");
  174 | 
  175 |     //3. Click on 'Signup / Login' button
  176 |     await page.getByText(" Signup / Login").click();
  177 | 
  178 |     //4. Verify 'New User Signup!' is visible
  179 |     await expect(page.locator(".signup-form h2")).toContainText("New User Signup!");
  180 | 
  181 |     //5. Enter name and email address
  182 |     await page.getByPlaceholder("Name").fill("Sergio Marquine");
  183 |     await page.locator(".signup-form input:nth-child(3)").fill("sergiomarquine@gmail.com");
  184 | 
  185 |     //6. Click 'Signup' button
  186 |     await page.getByRole('button', { name: 'Signup' }).click();
  187 | 
  188 |     //7. Verify error 'Email Address already exist!' is visible
  189 |     await expect(page.getByText('Email Address already exist!')).toBeVisible();
  190 | })
  191 | 
  192 | test("Test Case 6: Contact Us Form", async ({ page }) => {
  193 |     // 1. Create a dummy test file dynamically (avoids file lock or path issues)
  194 |   const testFilePath = path.join(__dirname, 'test_upload.txt');
  195 |   fs.writeFileSync(testFilePath, 'This is a sample automation test file.');
  196 | 
  197 |   // 2. Block only intrusive ad domains
  198 |   await page.route(/(pagead2|doubleclick|googlesyndication)/, route => route.abort());
  199 | 
  200 |   // 3. Navigate
  201 |   await page.goto('https://automationexercise.com/contact_us');
  202 |   await expect(page.getByRole('heading', { name: 'Get In Touch' })).toBeVisible();
  203 | 
  204 |   // 4. Fill all text inputs
  205 |   await page.getByPlaceholder('Name').fill('Sergio');
  206 |   await page.locator('input[data-qa="email"]').fill('sergiomarquine@gmail.com');
  207 |   await page.getByPlaceholder('Subject').fill('Testing');
  208 |   await page.getByPlaceholder('Your Message Here').fill('Automation testing contact form submission.');
  209 | 
  210 |   // 5. Upload the txt file
  211 |   await page.locator('input[name="upload_file"]').setInputFiles(testFilePath);
  212 | 
  213 |   // 6. Listen for and accept the dialog before clicking submit
  214 |   page.once('dialog', async dialog => {
  215 |     await dialog.accept();
  216 |   });
  217 | 
  218 |   // 7. Click the submit button
  219 |   await page.locator('input[data-qa="submit-button"]').click();
  220 | 
  221 |   // 8. Assert success alert
  222 |   const successAlert = page.locator('div.status.alert-success');
  223 |   await expect(successAlert).toBeVisible({ timeout: 15000 });
  224 |   await expect(successAlert).toContainText('Success! Your details have been submitted successfully.');
  225 | 
  226 |   // 9. Click Home button and verify landing
  227 |   await page.locator('.btn-success').click();
  228 |   await expect(page).toHaveURL(/.*automationexercise\.com\/?$/);
  229 | 
  230 |   // Clean up the created test file
  231 |   if (fs.existsSync(testFilePath)) {
  232 |     fs.unlinkSync(testFilePath);
  233 |   }
  234 | });
  235 | 
  236 | test("Test Case 7: Verify Test Cases Page",async({page})=>
  237 | {
  238 |     //1. Navigate to url 'http://automationexercise.com'
  239 |     await page.goto("http://automationexercise.com");
  240 | 
  241 |     //2. Verify that home page is visible successfully
  242 |     expect(await page.title()).toContain("Automation Exercise");
  243 | 
  244 |     //3.Click on 'Test Cases' button
  245 |     await page.locator("//a[contains(text(),'Test Cases')]").click();
  246 |     
  247 |     //4.Verify user is navigated to test cases page successfully
> 248 |     await expect(page).toHaveURL(/.\/test_cases/);
      |                        ^ Error: expect(page).toHaveURL(expected) failed
  249 | })
```