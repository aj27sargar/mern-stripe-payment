# MERN Stripe Payment 💳

A full-stack payment integration project using the **MERN stack (MongoDB, Express.js, React, Node.js)** and **Stripe** for secure and seamless online payments.

---

## 🚀 Features

- 🔐 Secure Stripe Payment Gateway
- 💰 One-time Payments
- 🛒 Dynamic Product Checkout
- 📦 Backend validation and transaction handling
- ⚙️ Stripe Test Mode Integration
- 🌐 Full MERN Stack Architecture

---

## 🧰 Tech Stack

**Frontend:**
- React
- Axios
- Stripe React SDK (`@stripe/react-stripe-js`, `@stripe/stripe-js`)

**Backend:**
- Node.js
- Express.js
- Stripe SDK (`stripe`)
- MongoDB (optional, for saving orders)

---

## 📦 Project Structure

mern-stripe-payment/
├── client/ # React frontend
│ └── src/
│ └── components/
│ └── App.js
│ └── index.js
├── server/ # Node.js backend
│ └── routes/
│ └── controllers/
│ └── server.js
├── .env
├── README.md

yaml
Copy
Edit




---

## ⚙️ Setup Instructions

### 🔐 Stripe Test Keys
Create a `.env` file in `/server`:
```env
STRIPE_SECRET_KEY=sk_test_**********************
````

### 📦 Backend Setup

```bash
cd server
npm install
npm start
```

### 🌐 Frontend Setup

```bash
cd client
npm install
npm start
```

---

## 🧪 Stripe Testing Details

Use Stripe test cards to simulate payments:

| Card Number           | Type | Result             |
| --------------------- | ---- | ------------------ |
| `4242 4242 4242 4242` | Visa | Successful Payment |
| `4000 0000 0000 9995` | Visa | Declined Payment   |

> Use any **future date**, any **CVV**, and **any ZIP code**.

---

## 📸 Screenshots

> Add a few screenshots of:

* ✅ Payment form
* 🎉 Success message
* ❌ Declined payment

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).

---

## 🙌 Acknowledgements

* [Stripe Docs](https://stripe.com/docs)
* [MERN Stack Guide](https://www.mongodb.com/mern-stack)

---

## ✍️ Author

**Ajit Sargar**
🔗 [GitHub](https://github.com/aj27sargar) | [LinkedIn](https://www.linkedin.com/in/ajit-sargar-495a1a253/)

---

