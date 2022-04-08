
const products = [
    {
      id: 1,
      name: 'Camisa Akatsuki',
      href: '#',
      imageSrc: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS0fcT65UD-EksXUYzAdqf0o9Be--mTfW8Kf9EHdeNelHp2JDpmBAujWuGJMdI3frANUv7xmFHLo8YL5Isj4NylLyVH3DxwxflF9tn3LuD5assvpGFEqRc&usqp=CAE",
      imageAlt: "Camisa akatsuki",
      price: 'R$45,00',
      color: 'Preta e Vermelha',
    },
    {
        id: 1,
        name: 'Camisa Dragon Ball',
        href: '#',
        imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR4aCx2-Fco8r7mO3qcVMsD0yVtuMW_2be9rEnwN8EGIrbOMWVPHbfLgzf8ui8VDvscVc0h7yiW-Q0ku9a7RWPIZYhL7EVFshyzMNclEfEKvC2WSQOZAxZd&usqp=CAE',
        imageAlt: "Camisa Dragon Ball",
        price: 'R$45,00',
        color: 'Preta e Laranja',
      },
      {
        id: 1,
        name: 'Camisa Marvel Dark',
        href: '#',
        imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQzekUfq_lipAk97zmaJFnif-vCKN8MguhmYkI4SDAKZMUpmBWFbLYEYDLD3CRKFCwpljtRex12LgzROCQbrYeE6APf5wgX6A9zakE6HQ2iAFG0aZfPV49o0w&usqp=CAE',
        imageAlt: "Camisa Marvel Preta",
        price: 'R$55,00',
        color: 'Preta e Branca',
      },
      {
        id: 1,
        name: 'Camisa DC Comics',
        href: '#',
        imageSrc: 'http://www.atl1.com.br/loja/product_images/l/906/4__98499_zoom.jpg',
        imageAlt: "Camisa DC Comics",
        price: 'R$55,00',
        color: 'Branca',
      },
      {
        id: 1,
        name: 'Camisa The Big Bang',
        href: '#',
        imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRbAq_a47H7uzM765sYSV2n-ANCPt_qcBN2vOqIAcQNUVpi2sLBpGB_zJ91fX_9ciiWqqLoRGnTiUZn3onIi2ZWb24351i_AwsQe_r-Z9wjqyAph4Z2Q0ulDg&usqp=CAE',
        imageAlt: "Camisa The Big Bang",
        price: 'R$35,00',
        color: 'Branca',
      },{
        id: 1,
        name: 'Camisa Stranger Things',
        href: '#',
        imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTALh5-1-wcjbO3bNa4nmmwsd2f-zwI6OcloO3zwoVnC5PZZ8O7NKkxV1jSMf6pieDSZmE2LMnJiOz0fazWVXTfOzKcQcYamTUemNydY1AixwWYmq0xbigZ&usqp=CAE',
        imageAlt: "Camisa Stranger Things",
        price: 'R$35,00',
        color: 'Preta',
      },{
        id: 1,
        name: 'Camisa DC Comics',
        href: '#',
        imageSrc: 'http://www.atl1.com.br/loja/product_images/l/906/4__98499_zoom.jpg',
        imageAlt: "Camisa DC Comics",
        price: 'R$55,00',
        color: 'Branca',
      },{
        id: 1,
        name: 'Camisa DC Comics',
        href: '#',
        imageSrc: 'http://www.atl1.com.br/loja/product_images/l/906/4__98499_zoom.jpg',
        imageAlt: "Camisa DC Comics",
        price: 'R$55,00',
        color: 'Branca',
      },
    
  ]
  
  export default function Example() {
    return (
      <div className="bg-orange-400 border-2 border-gray-700 rounded-md ">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Produtos na Promoção</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-800 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-md text-gray-800 font-normal">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0 " />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-800">{product.color}</p>
                  </div>
                  <p className="text-xl font-medium text-gray-800">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }