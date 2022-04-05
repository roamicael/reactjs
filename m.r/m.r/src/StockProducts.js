
const productos = [
    {id: 1 , nombre: "LG K62", img: `https://www.allstock.ec/wp-content/uploads/2021/05/K62-completo.jpg`, descripcion:"Display 6.6 HD+ Punch Hole Display Plataforma Android 10. Procesador 2.3GHz Octa-Core (MT6765). <br> Capacidad de Batería 4,000mAh Memoria Interna 128GB.RAM 4GB", precio: 35000},                   
    {id: 2 , nombre: "Moto g9", img:`https://www.gnradar.com/wp-content/uploads/2020/05/Moto-G9-Plus-2020-Specifications-www.gnradar.com_.jpg` ,descripcion:"Procesador: Snapdragon 730G.Sistema operativo: Android 10.<br>Memoria RAM: 4 GB.Almacenamiento: 128 GB.Sistema Operativo: iOS 14.Pantalla: 6,81 pulgadas.<br>Resolucion: 1080 x 2400 (Full HD+)Densidad de píxeles:386 ppp. ", precio: 45000},
    {id: 3 , nombre: "samsung A71", img:`https://d3qoj2c6mu9s8x.cloudfront.net/Custom/Content/Products/39/71/3971711_celular-samsung-galaxy-a71-preto-6gb-128gb-tela-6-7-camera-quadrupla-64mp-12mp-5mp-5mp_z2_637209233863003551.jpg`, descripcion:"Pantalla: 5.8, 1440 x 2960 pixels. Procesador: Snapdragon 835 / Exynos 8895.RAM: 4GB <br>Almacenamiento: 64GB Expansión: microSD <br>Cámara: 12 MP Batería: 3000 mAh OS: Android 7.0 Perfil: 8 mm Peso: 155" ,precio: 49000},
    {id: 4 , nombre: "xiaomi", img:`https://elchapuzasinformatico.com/wp-content/uploads/2020/09/Xiaomi-Mi-10T-Lite.jpg`,descripcion: "Display 6.6 HD+ Punch Hole Display Plataforma Android 10. Procesador 2.3GHz Octa-Core (MT6765).<br> Capacidad de Batería 4,000mAh Memoria Interna 128GB.RAM 4GB", precio: 36000},                 
    ];



export const getProducts = () =>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(productos)
        }, 2000)
    })
}