const mongoose = require("mongoose");
const MONGOURI="mongodb+srv://parvez07:Hjhf4FxYWfj6Sf9g@cluster0.gwgsu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const InitiateMongoServer = async () => {
try {
await mongoose.connect(MONGOURI, {
useNewUrlParser: true
});
console.log("Connected to DB !!");
} catch (e) {
console.log(e);
throw e;
}
};
module.exports = InitiateMongoServer;
