// ===== 
//  Puerto
// ======
process.env.PORT = process.env.PORT || 3000;


// ===== 
//  Entorno
// ======
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===== 
//  Vencimiento del token
// ======
process.env.CADUCIDAD_TOKEN = '48h';


// ===== 
//  SEED
// ======
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ===== 
//  Base de datos
// ======
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
    //  urlDB = 'mongodb+srv://user:pass@cursomongo-beosp.mongodb.net/cafe?retryWrites=true&w=majority';
}

process.env.URLDB = urlDB;


// ===== 
//  Google client Id
// ======
process.env.CLIENT_ID = process.env.CLIENT_ID || '479656284290-d5aosbtvidcole6qshp6eljg84smioij.apps.googleusercontent.com';