import DS from 'ember-data';

const { Model } = DS;

export default Model.extend({
  title: DS.attr('string'),
  order: DS.attr('number'),
  stories: DS.hasMany('story')
});
