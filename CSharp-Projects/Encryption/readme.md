---
marp: true
theme: uncover
header: 'Csharp Vscode'
footer: 'by Xing'
paginate: true
size: 16:9
---

# Encryption

- MD5 (un reverse encrypt)
- DES (symmetric, same key for encryption and decryption)
- RSA (symmetric, different key for encryption and
- SSL (digital signature)

---

### namespace System.Security.Cryptography

- `System.Security.Cryptography`

---

### MD5 UTF8 (Encoding)

- MD5 : all language are same using MD5, different is Encoding. C# using UTF8 Encoding
- `byte[] bytes = Encoding.UTF8.GetBytes(source)`
- total length `32`, each position has `16` possibility
- save string has same MD5 result
- cannot reverse

---

### MD5 characters and pros and cons

- same string, same result, such as password using MD5 save to db, next time compare 2 MD5
- MD5 cannot decryption, on internet using sample compare ( keep some most often seen). The algorithm is safe, cannot decryption
- add `salt`, such as `MD5(password + salt)`, good
- double MD5, such as `MD5(MD5(password))` , but not very good
- use MD5 avoid modify content

---

### DES vs. AES

- DES (Data Encryption Standard) and AES (Advanced Encryption Standard) both are the symmetric block cipher. ... The basic difference between DES and AES is that in DES plaintext block is divided into two halves before the main algorithm starts whereas, in AES the entire block is processed to obtain the ciphertext.

---
