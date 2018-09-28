var budgetController = (function() {

    var Income = function(id, description, value) {

        this.id = id;
        this.description = description;
        this.value = value;

    };

    var Expense = function(id, description, value) {

        this.id = id;
        this.description = description;
        this.value = value;

    };


    var data = {
        allItems: {
          exp: [],
          inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        //allows add item to data structure
        addItem: function(type, des, val) {
            var newItem, ID;

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }


            if (type === 'exp') {
                newItem = new Expense(ID, des, val)
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }

            data.allItems[type].push(newItem);

            return newItem;
        }
    }

})();


var UIController = (function() {

    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: document.querySelector(DOMStrings.inputValue).value
            }
        },

        getDOMStrings: function() {
            return DOMStrings;
        }

    }

})();


var appController = (function(ctrlBudget, ctrlUI) {

    var setupEventListeners = function() {

        var DOM = ctrlUI.getDOMStrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener ('keypress', function (e) {
            if (e.code ===13 || e.keyCode === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function() {
        var input, newItem;

        //1. get input field from user
        input = ctrlUI.getInput();

        //2. add input do budgetController
        newItem = ctrlBudget.addItem(input.type, input.description, input.value);

        //3. add item to UI
        //4. calculate budget
        //5. update budget
    };

    return {
        init: function() {
            console.log('project started');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

appController.init();

