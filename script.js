let url = "https://api-mobilespecs.azharimm.site/v2/brands"
const fetchData = async ()=>{
   const response = await fetch(url);
    const datas = await response.json();
        for(let i=0; i< datas.data.length; i++){
            let main = document.createElement("div")
            main.className="container"
             let brandName =datas.data[i].brand_name;
             let brandSlug = datas.data[i].brand_slug;
             let deviceCount = datas.data[i].device_count;
             let details = datas.data[i].detail;
             main.innerHTML =`<strong>Brand Name :</strong><i> ${brandName} <i> <br>
             <strong>Brand Name :</strong><i> ${brandSlug}</i><br>
             <strong>Device Count : </strong><i>${deviceCount}</i><br>
             <strong>Details :</strong><i>${details}</i><br><br>`
        document.body.append(main)

        }
       
}
fetchData();