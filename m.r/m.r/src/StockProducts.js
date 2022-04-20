
const productos = [
    {id: 1 , nombre: "LG K62", img: `https://www.allstock.ec/wp-content/uploads/2021/05/K62-completo.jpg`, category:"used" ,descripcion:"3 meses de uso... Display 6.6 HD+ Punch Hole Display Plataforma Android 10. Procesador 2.3GHz Octa-Core (MT6765).  Capacidad de Batería 4,000mAh Memoria Interna 128GB.RAM 4GB", precio: "35,000", stock:1},                   
    {id: 2 , nombre: "Moto g9", img:`https://i1.wp.com/gadgetsmexico.mx/wp-content/uploads/2020/09/moto-g9-plus-Copper-Rose-combo.jpg?resize=1320%2C926&ssl=1`,category:"new" ,descripcion:"Procesador: Snapdragon 730G.Sistema operativo: Android 10.<br>Memoria RAM: 4 GB.Almacenamiento: 128 GB.Sistema Operativo: iOS 14.Pantalla: 6,81 pulgadas.<br>Resolucion: 1080 x 2400 (Full HD+)Densidad de píxeles:386 ppp. ", precio: "45,000", stock:3},
    {id: 3 , nombre: "samsung A71", img:`https://d3qoj2c6mu9s8x.cloudfront.net/Custom/Content/Products/39/71/3971711_celular-samsung-galaxy-a71-preto-6gb-128gb-tela-6-7-camera-quadrupla-64mp-12mp-5mp-5mp_z2_637209233863003551.jpg`,category:"used" , descripcion:"6 meses de uso... Pantalla: 5.8, 1440 x 2960 pixels. Procesador: Snapdragon 835 / Exynos 8895.RAM: 4GB <br>Almacenamiento: 64GB Expansión: microSD <br>Cámara: 12 MP Batería: 3000 mAh OS: Android 7.0 Perfil: 8 mm Peso: 155" ,precio: "49,000", stock:1},
    {id: 4 , nombre: "xiaomi", img:`https://elchapuzasinformatico.com/wp-content/uploads/2020/09/Xiaomi-Mi-10T-Lite.jpg`,category:"new" , descripcion: "Display 6.6 HD+ Punch Hole Display Plataforma Android 10. Procesador 2.3GHz Octa-Core (MT6765).<br> Capacidad de Batería 4,000mAh Memoria Interna 128GB.RAM 4GB", precio: "36,000", stock:2},                 
    {id:5 , nombre: "iphone 11 pro", img: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYNzLXduoIdVzMwkQoWlLlCLkACGSTjUuF7g&usqp=CAU`, category: "new", descripcion:"El iPhone 11 Pro de APPLE, tiene un sistema de tres cámaras que brinda una experiencia fotográfica de nivel profesional,| el chip A13 Bionic que establece un nuevo estándar de rendimiento y eficiencia energética, dobla la apuesta por el aprendizaje automático y redefine lo que es posible para un teléfono móvil. Pantalla OLED Super Retina XDR, para ver tus películas y jugar tus videojuegos favoritos en alta definición con un brillo de hasta 1200 nits.Capacidad de la batería : 3,046 mAh. Material del cuerpo : Acero inoxidable, Vidrio. Generación de banda ancha : 4G. Fuente de luz de la cámara, Flas, Banda de frecuencia : WCDMA (UMTS)/GSM 850/900/1800/1900.", precio: "157,000", stock:2},
];

const categories =[
    {id:"new", title:"Nuevos"},
    {id:"used", title:"Usados"}
    
];

export const getCategory = () =>{
    return new Promise (resolve =>{
        setTimeout(() => {
           resolve(categories);
        },100)
    })
} 



export const getProducts = (categoryId) =>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(categoryId ? productos.filter((prod  => prod.category === categoryId)): productos)
        }, 500)
    })
}

export const getProductsById = (id) =>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(productos.find(prod => prod.id == id))
        }, 500)
    })
}