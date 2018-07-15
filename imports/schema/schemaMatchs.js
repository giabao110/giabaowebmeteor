import {MatchsCol} from '../api/matchs';

MatchsCol.schema = new SimpleSchema({
  name: {type: String},
  text: {type:String},
  incompleteCount: {type: Number, defaultValue: 0},
  userId: {type: String, regEx: SimpleSchema.RegEx.Id, optional: true}
});