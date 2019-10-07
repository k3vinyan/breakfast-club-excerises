const NotAnArray = require('./not-an-array');

var myReporter = {
  jasmineStarted: function(suiteInfo) {
    console.log(suiteInfo.totalSpecsDefined + "tests")
    console.log("********************************************************************")
  },
  suiteStarted: function(result) {
    console.log("Test: " + result.description)

  },
  specStarted: function(result) {
    console.log("Description: Should be " + result.description)

  },
  specDone: function(result) {
    console.log("\nStatus: " + result.status)

  },
  suiteDone: function(result) {
    console.log("--------------------------------------------------------------------")
  },
  jasmineDone: function(result) {
  
  }
}

jasmine.getEnv().addReporter(myReporter);

describe("push()", function() {
    it("able to add value to itself", function() {
      const obj = new NotAnArray();

      obj.push('a');
      obj.push('b');
      obj.push('c');

      expect(obj.storage).toEqual({'0': 'a', '1': 'b', '2': 'c'})
    });
  });




  describe("A suite is just a function", function() {
    var a;
  
    it("and so is a spec", function() {
      a = true;
  
      expect(a).toBe(true);
    });
  });

  describe("The 'toBe' matcher compares with ===", function() {

    it("and has a positive case", function() {
        expect(true).toBe(true);
      });

      it("and can have a negative case", function() {
        expect(false).not.toBe(true);
      })
    });