let url = "https://api-mobilespecs.azharimm.site/v2/brands" // assigning  url to an variable
const fetchData = async ()=>{ //using async and await with fetch to fetching data
   const response = await fetch(url);
    const datas = await response.json();
        for(let i=0; i< datas.data.length; i++){ // looping through the array elements
            let main = document.createElement("div") //creating container elements
            main.className="container"
           //getting necessery data
             let brandName =datas.data[i].brand_name;
             let brandSlug = datas.data[i].brand_slug;
             let deviceCount = datas.data[i].device_count;
             let details = datas.data[i].detail;
           //inserting data to the div element
             main.innerHTML =`<strong>Brand Name :</strong><i> ${brandName} <i> <br>
             <strong>Brand Name :</strong><i> ${brandSlug}</i><br>
             <strong>Device Count : </strong><i>${deviceCount}</i><br>
             <strong>Details :</strong><i>${details}</i><br><br>`
        document.body.append(main)

        }
       
}
fetchData();
