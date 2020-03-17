import DS from 'ember-data';

const {Model} = DS;

export default Model.extend({
  code: DS.attr('string'),
  description: DS.attr('string'),
  tags: DS.hasMany('tag')
});
