var assert = chai.assert;

var dogSpeaker = {
  callMyDog: function(name) {
    return 'Come here ' + name;
  }
};

describe('dogSpeaker', function() {
  describe('#callMyDog()', function() {
    it('should call my dog', function() {
      assert.equal(dogSpeaker.callMyDog('Washburne'), 'Come here Washburne');
    })
  })
})
