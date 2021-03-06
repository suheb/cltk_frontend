this.Authors = new Meteor.Collection('authors');

Schemas.Authors = new SimpleSchema({
  title: {
    type: String,
    max: 60
  },
  slug: {
    type: String,
    max: 60
  },
  /*
   * Remove language and corpus in the future when we learn more about optimizing
   * the sync with the text server
   */
  language: {
    type: String,
    max: 60
  },
  corpus: {
    type: String,
    max: 60
  },
  english_name: {
    type: String,
    max: 60,
    optional: true,
  },
  original_name: {
    type: String,
    max: 60,
    optional: true,
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  updatedAt: {
    type: Date,
    optional: true,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    }
  }
});

Authors.attachSchema(Schemas.Authors);
