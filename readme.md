# API Kursus

## Dokumentasi API:

### Spesifikasi :

- Runtime : Node.js
- Framework : Express
- Database : MongoDB

### Fitur

- GET: Mendapatkan semua data kursus
- POST: Menambah kursus baru
- DELETE: Menghapus kursus berdasarkan ID

### Endpoint

#### 1. Endpoint 1: GET Semua Kursus

**URL** : `/api/kursus`

**Method** : GET

**Deskripsi** : Mendapatkan semua data kursus

**Contoh Response** :

```
[
  {
    "_id": "63f9d0e6c5e4f68f3b9d3a89",
    "nama": "Kursus Vue.js Dasar",
    "deskripsi": "Belajar dasar-dasar Vue.js",
    "harga": 150000
  }
]
```

#### 2. Endpoint 2: POST Kursus Baru

**URL** : `/api/kursus`

**Method** : POST

**Deskripsi** : Menambah kursus baru

**Headers**:

- `Content-Type`: `application/json`

**Body (JSON)**:

```
{
  "nama": "Kursus Node.js Lanjutan",
  "deskripsi": "Belajar Node.js untuk backend yang kompleks",
  "harga": 300000
}
```

**Contoh Response**:

```
{
  "_id": "63f9d2a6e7f3f58f4b9d3b12",
  "nama": "Kursus Node.js Lanjutan",
  "deskripsi": "Belajar Node.js untuk backend yang kompleks",
  "harga": 300000
}
```

#### 3. Endpoint 3: DELETE Kursus

**URL** : /api/kursus/:id

**Method** : DELETE

**Deskripsi** : Menghapus kursus berdasarkan ID

**Contoh URL**:

```
/api/kursus/63f9d2a6e7f3f58f4b9d3b12
```

**Contoh Response** :

```
{
  "message": "Kursus berhasil dihapus"
}
```

### Pengujian API:

Gunakan Postman atau Insomnia untuk menguji endpoint:

- GET: http://localhost:5000/api/kursus

- POST: http://localhost:5000/api/kursus dengan body JSON

- DELETE: http://localhost:5000/api/kursus/:id
