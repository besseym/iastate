(function(window, undefined) {
  jQuery.extend(jimEvent.fn, {
    /************************** START NUMBER FUNCTIONS *****************************/
    "jimPlus": function(parameters, obj) {
      var self = this, value = null, sum=0, i, iLen, parameter;
      if(jimUtil.exists(parameters)) {
        for(i=0, iLen=parameters.length; i<iLen; i+=1) {
          parameter = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[i], obj));
          if(jimEvent.isNumber(parameter)) {
            sum += parameter;
          } else {
            sum = null;
            break;
          }
        }
        value = sum;
      }
      return value;
    },
    "jimMinus": function(parameters, obj) {
      var self = this, value = null, i, iLen, parameter;
      if(jimUtil.exists(parameters)) {
        for(i=0, iLen=parameters.length; i<iLen; i+=1) {
          parameter = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[i], obj));
          if(jimEvent.isNumber(parameter)) {
            value = (jimUtil.exists(value)) ? value - parameter : parameter;
          } else {
            value = null;
            break;
          }
        }
      }
      return value;
    },
    "jimMultiply": function(parameters, obj) {
      var self = this, value = null, i, iLen, parameter;
      if(jimUtil.exists(parameters)) {
        for(i=0, iLen=parameters.length; i<iLen; i+=1) {
          parameter = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[i], obj));
          if(jimEvent.isNumber(parameter)) {
            value = (!value) ? parameter : value * parameter;
          } else {
            value = null;
            break;
          }
        }
      }
      return value;
    },
    "jimDivide": function(parameters, obj) {
      var self = this, value = null, op1, op2;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        op1 = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[0], obj));
        op2 = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[1], obj));
        if(jimEvent.isNumber(op1) && jimEvent.isNumber(op2) && op2 !== 0) {
          value = op1 / op2;
        }
      }
      return value;
    },
    "jimMax": function(parameters, obj) {
      var self = this, value = null, max=0, i, iLen, parameter;
      if(jimUtil.exists(parameters)) {
        for(i=0, iLen=parameters.length; i<iLen; i+=1) {
          parameter = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[i], obj));
          if(jimEvent.isNumber(parameter)) {
            max = Math.max(max, parameter);
          } else {
            max = null;
            break;
          }
        }
        value = max;
      }
      return value;
    },
    "jimMin": function(parameters, obj) {
      var self = this, value = null, min = Number.MAX_VALUE, i, iLen, parameter;
      if(jimUtil.exists(parameters)) {
        for(i=0, iLen=parameters.length; i<iLen; i+=1) {
          parameter = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[i], obj));
          if(jimEvent.isNumber(parameter)) {
            min = Math.min(min, parameter);
          } else {
            min = null;
            break;
          }
        }
        value = min;
      }
      return value;
    },
    "jimAvg": function(parameters, obj) {
      var self = this, value = null, sum;
      if(jimUtil.exists(parameters) && parameters.length !== 0) {
        sum = self.jimPlus(parameters, obj);
        if(jimEvent.isNumber(sum)) {
          value = sum / parameters.length;
        }
      }
      return value;
    },
    "jimAbs": function(parameters, obj) {
      var self = this, value = null, op;
      if(jimUtil.exists(parameters[0])) {
        op = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[0], obj));
        if(jimEvent.isNumber(op)) {
          value = Math.abs(op);
        }
      }
      return value;
    },
    "jimRound": function(parameters, obj) {
      var self = this, value, num, dec;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        num = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[0], obj));
        dec = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[1], obj));
        if(jimEvent.isNumber(num) && jimEvent.isNumber(dec)) {
          value = (Math.round(num*Math.pow(10,dec))/Math.pow(10,dec)).toFixed(dec);
        }
      }
      return value;
    },
    "jimPercent": function(parameters, obj) {
      var self = this, value = null, op1, op2;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        op1 = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[0], obj));
        op2 = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[1], obj));
        if(jimEvent.isNumber(op1) && jimEvent.isNumber(op2)) {
          value = (op1*op2)/100;
        }
      }
      return value;
    },
    "jimSqrt": function(parameters, obj) {
      var self = this, value = null, op;
      if(jimUtil.exists(parameters[0])) {
        op = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[0], obj));
        if(jimEvent.isNumber(op)) {
          value = Math.sqrt(op);
        }
      }
      return value;
    },
    "jimMod": function(parameters, obj) {
      var self = this, value = null, op1, op2;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        op1 = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[0], obj));
        op2 = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[1], obj));
        if(jimEvent.isNumber(op1) && jimEvent.isNumber(op2)) {
          value = op1 % op2;
        }
      }
      return value;
    },
    /*************************** END NUMBER FUNCTIONS ******************************/
    
    /************************ START COMPARATOR FUNCTIONS ***************************/
    "jimEquals": function(parameters, obj) {
      var self = this, value = null, op1, op2;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        op1 = jimEvent.tryNumberConversion(jimEvent.tryBooleanConversion(self.evaluateExpression(parameters[0], obj)));
        op2 = jimEvent.tryNumberConversion(jimEvent.tryBooleanConversion(self.evaluateExpression(parameters[1], obj)));
        value = op1 === op2;
      }
      return value;
    },
    "jimNotEquals": function(parameters, obj) {
      var self = this, value = null, op1, op2;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        op1 = jimEvent.tryNumberConversion(jimEvent.tryBooleanConversion(self.evaluateExpression(parameters[0], obj)));
        op2 = jimEvent.tryNumberConversion(jimEvent.tryBooleanConversion(self.evaluateExpression(parameters[1], obj)));
        value = op1 !== op2;
      }
      return value;
    },
    "jimGreater": function(parameters, obj) {
      var self = this, value = null, op1, op2;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        op1 = jimEvent.tryNumberConversion(jimEvent.tryDateConversion(self.evaluateExpression(parameters[0], obj)));
        op2 = jimEvent.tryNumberConversion(jimEvent.tryDateConversion(self.evaluateExpression(parameters[1], obj)));
        value = op1 > op2;
      }
      return value;
    },
    "jimLess": function(parameters, obj) {
      var self = this, value = null, op1, op2;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        op1 = jimEvent.tryNumberConversion(jimEvent.tryDateConversion(self.evaluateExpression(parameters[0], obj)));
        op2 = jimEvent.tryNumberConversion(jimEvent.tryDateConversion(self.evaluateExpression(parameters[1], obj)));
        value = op1 < op2;
      }
      return value;
    },
    "jimGreaterOrEquals": function(parameters, obj) {
      var self = this, value = null, op1, op2;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        op1 = jimEvent.tryNumberConversion(jimEvent.tryDateConversion(self.evaluateExpression(parameters[0], obj)));
        op2 = jimEvent.tryNumberConversion(jimEvent.tryDateConversion(self.evaluateExpression(parameters[1], obj)));
        value = op1 >= op2;
      }
      return value;
    },
    "jimLessOrEquals": function(parameters, obj) {
      var self = this, value = null, op1, op2;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        op1 = jimEvent.tryNumberConversion(jimEvent.tryDateConversion(self.evaluateExpression(parameters[0], obj)));
        op2 = jimEvent.tryNumberConversion(jimEvent.tryDateConversion(self.evaluateExpression(parameters[1], obj)));
        value = op1 <= op2;
      }
      return value;
    },
    /************************* END COMPARATOR FUNCTIONS ****************************/
    
    /*************************** START TEXT FUNCTIONS ******************************/
    "jimCount": function(parameters, obj) {
      var self = this, value = null, op;
      if(jimUtil.exists(parameters[0])) {
        op = self.evaluateExpression(parameters[0], obj);
        value = (op.length === null || op.length === undefined) ? 0 : op.length;
      }
      return value;
    },
    "jimConcat": function(parameters, obj) {
      var self = this, value = null, op1, op2;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        op1 = self.evaluateExpression(parameters[0], obj);
        op2 = self.evaluateExpression(parameters[1], obj);
        value = jimEvent.tryStringConversion(op1).concat(jimEvent.tryStringConversion(op2));
      }
      return value;
    },
    "jimSubstring": function(parameters, obj) {
      var self = this, value = null, string, from, to;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1]) && jimUtil.exists(parameters[2])) {
        string = jimEvent.tryStringConversion(self.evaluateExpression(parameters[0], obj));  // make sure it's a string
        from = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[1], obj));
        to = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[2], obj));
        if(jimEvent.isNumber(from) && jimEvent.isNumber(to)) {
          value = string.substring(from, to);
        }
      }
      return value;    
    },
    "jimIndexOf": function(parameters, obj) {
      var self = this, value = null, string, searchstring, start;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        string = jimEvent.tryStringConversion(self.evaluateExpression(parameters[0], obj));
        searchstring = jimEvent.tryStringConversion(self.evaluateExpression(parameters[1], obj));
        start = 0;
        if(parameters[2]) {
          start = jimEvent.tryNumberConversion(self.evaluateExpression(parameters[2], obj));
        }
        if(typeof(string) === "string" && typeof(searchstring) === "string" && jimEvent.isNumber(start)) {
          value = string.indexOf(searchstring, start);
        }
      }
      return value;    
    },
    "jimUpper": function(parameters, obj) {
      var self = this, value = null, string;
      if(jimUtil.exists(parameters[0])) {
        string = jimEvent.tryStringConversion(self.evaluateExpression(parameters[0], obj));
        if(typeof(string) === "string") {
          value = string.toUpperCase();
        }
      }
      return value;    
    },
    "jimLower": function(parameters, obj) {
      var self = this, value = null, string;
      if(jimUtil.exists(parameters[0])) {
        string = jimEvent.tryStringConversion(self.evaluateExpression(parameters[0], obj));
        if(typeof(string) === "string") {
          value = string.toLowerCase();
        }
      }
      return value;    
    },
    "jimFirstUpper": function(parameters, obj) {
      var self = this, value = null, string;
      if(jimUtil.exists(parameters[0])) {
        string = jimEvent.tryStringConversion(self.evaluateExpression(parameters[0], obj));
        if(typeof(string) === "string") {
          value = string.substr(0,1).toUpperCase() + string.substr(1);   
        }         
      }    
      return value;
    },
    "jimContains": function(parameters, obj) {
      var self = this, value = null, string, pattern;
      if(jimUtil.exists(parameters[0] && parameters[1])) {
        string = jimEvent.tryStringConversion(self.evaluateExpression(parameters[0], obj));
        pattern = self.evaluateExpression(parameters[1], obj);
        if(typeof(string) === "string") {
          value = string.toLowerCase().indexOf(pattern.toLowerCase()) !== -1;    
        }
      }    
      return value;
    },
    /**************************** END TEXT FUNCTIONS *******************************/
    
    /*************************** START LOGIC FUNCTIONS *****************************/
    "jimAnd": function(parameters, obj) {
      var self = this, value = null, op1, op2;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        op1 = jimEvent.tryBooleanConversion(self.evaluateExpression(parameters[0], obj));
        op2 = jimEvent.tryBooleanConversion(self.evaluateExpression(parameters[1], obj));
        if(typeof(op1) === "boolean" && typeof(op2) === "boolean") {
          value = op1 && op2;
        }
      }
      return value;
    },
    "jimOr": function(parameters, obj) {
      var self = this, value = null, op1, op2;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        op1 = jimEvent.tryBooleanConversion(self.evaluateExpression(parameters[0], obj));
        op2 = jimEvent.tryBooleanConversion(self.evaluateExpression(parameters[1], obj));
        if(typeof(op1) === "boolean" && typeof(op2) === "boolean") {
          value = op1 || op2;
        }
      }
      return value;
    },
    "jimNot": function(parameters, obj) {
      var self = this, value = null, op;
      if(jimUtil.exists(parameters[0])) {
        op = jimEvent.tryBooleanConversion(self.evaluateExpression(parameters[0], obj));
        if(typeof(op) === "boolean") {
          value = !op;
        }
      }
      return value;    
    },
    "jimXOr": function(parameters, obj) {
      var self = this, value = null, op1, op2;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        op1 = jimEvent.tryBooleanConversion(self.evaluateExpression(parameters[0], obj));
        op2 = jimEvent.tryBooleanConversion(self.evaluateExpression(parameters[1], obj));
        if(typeof(op1) === "boolean" && typeof(op2) === "boolean") {
          value = (op1 && !op2) || (!op1 && op2);
        }
      }
      return value;
    },
    /**************************** END LOGIC FUNCTIONS ******************************/
    
    /************************* START CONSTANTS FUNCTIONS ***************************/
    "jimSystemDate": function() {
      var date = new Date();
      return date.formatDate("MM/dd/yyyy");
    },
    "jimSystemTime": function() {
      var time = new Date();
      return time.formatDate("HH:mm:ss");
    },
    "jimRandom": function() {
      var dec = 8;
      return Math.round(Math.random() * Math.pow(10, dec)) / Math.pow(10, dec);
    },
    "jimRegExp": function(parameters, obj) {
      var self = this, value = null, op, regexp;
      if(jimUtil.exists(parameters[0]) && jimUtil.exists(parameters[1])) {
        op = self.evaluateExpression(parameters[0], obj) + "";
        regexp = new RegExp(self.evaluateExpression(parameters[1], obj), "i");
        value = regexp.test(op);    
      }    
      return value;    
    }
    /************************* END CONSTANTS FUNCTIONS *****************************/
  });
})(window);