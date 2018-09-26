var budgetController = (function() {

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

    var DOM = ctrlUI.getDOMStrings();

    var ctrlAddItem = function() {
        //1. get input field from user
        var input = UIController.getInput();
        //2. add input do budgetController
        //3. add item to UI
        //4. calculate budget
        //5. update budget
    };

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener ('keypress', function (e) {
        if (e.code ===13 || e.keyCode === 13) {
            ctrlAddItem();
        }
    })

})(budgetController, UIController);

