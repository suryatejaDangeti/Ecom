
export async function productsListing(searchKeyword: any) {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const res = await fetch(`https://dummyjson.com/${searchKeyword}`);
    const res = await fetch(`https://dummyjson.com/products`);
    // const secres = await fetch(`https://dummyjson.com/${searchKeyword}/category=laptops`);
    // const secposts = await secres.json();
    // console.log(secposts, "secposts")
    // const res = await fetch(`https://api.escuelajs.co/api/v1/products`);
    const products = await res.json();
    console.log(products)
   
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return products
}

export async function productDetail(id: string) {

    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await res.json();
    return product
}