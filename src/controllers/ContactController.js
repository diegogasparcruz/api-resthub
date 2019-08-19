const Contact = require('../models/Contact');

module.exports = {

  async index(req, res){

    const contacts = await Contact.find().sort('-createdAt');

    return res.json(contacts);
  },

  async store(req, res){

    const contact = await Contact.create(req.body);

    return res.json(contact);

  },

  async show(req, res){

    await Contact.findById({ _id: req.params.id }, (err, contact) => {

      if(err){
        res.send(err);
      }

      return res.json(contact);

    });

    // if(!contact){
    //   return res.send({ message: 'Contact Not Found!' });
    // }

    // return res.json(contact);

  },

  async update(req, res){

    const product = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(product);
  },

  async destroy(req, res){

    await Contact.findByIdAndDelete(req.params.id);
    return res.send({message: 'Contact deletado com sucesso'});
  }

};