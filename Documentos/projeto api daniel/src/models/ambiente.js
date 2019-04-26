const Schema = mongoose.Schema;

const schema = new Schema({
    id: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
});

module.exports = mongoose.model('Ambiente', schema);