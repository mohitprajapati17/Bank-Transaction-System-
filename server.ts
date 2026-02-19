import app from "./src/app.ts";
import connectDB from "./src/db.ts";

const PORT =3000;
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
