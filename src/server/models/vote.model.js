import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**x
 * Hero Schema
 */
const VoteSchema = new mongoose.Schema({
  heroId: {
    type: String,
    required: true
  },
  voterId: {
    type: String,
    required: true
  },
  value : {
    type: Number,
    default: 0
  }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
VoteSchema.method({
});

/**
 * Statics
 */
VoteSchema.statics = {
  /**
   * Get hero
   * @param {ObjectId} id - The objectId of hero.
   * @returns {Promise<Hero, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((hero) => {
        if (hero) {
          return hero;
        }
        const err = new APIError('No such hero exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List hero-list in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of hero-list to be skipped.
   * @param {number} limit - Limit number of hero-list to be returned.
   * @returns {Promise<Hero[]>}
   */
  list({ skip = 0, limit = 50, name, sortByArgs} = {}) {
    //sortParams = sortParams || {createdAt: -1};
    if(name){
      return this.find({"name": { $regex: ".*" + name + ".*"}})
        .sort(sortByArgs)
        .skip(+skip)
        .limit(+limit)
        .exec();
    } else {
      return this.find()
        .sort(sortByArgs)
        .skip(+skip)
        .limit(+limit)
        .exec();
    }
  },
};

/**
 * @typedef Hero
 */
export default mongoose.model('votes', VoteSchema);
