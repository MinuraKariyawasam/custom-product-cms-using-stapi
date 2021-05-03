const { sanitizeEntity } = require('strapi-utils');

module.exports = {

  async find(ctx) {
    const entity = await strapi.services.product.find();
    return sanitizeEntity(entity, { model: strapi.models.product });
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    
    const entity = await strapi.services.product.findOne({ id });
    console.log(entity);
    return sanitizeEntity(entity, { model: strapi.models.product });
  },

  async findPrice(ctx) {
    const entity = await strapi.services.product.find({
        price: ctx.params.price
    });
    return sanitizeEntity(entity, { model: strapi.models.product });
  },

};