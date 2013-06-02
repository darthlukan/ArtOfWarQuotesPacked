/*
 * @author Brian Tomlinson <darthlukan@gmail.com>
 * @description Meat and potatoes
 */

var app = {

    quotes: '',
    quote: '',
    randint: '',

    /*
     * @returns this.quotes (Array Object)
     */
    getQuotes: function () {
        $.ajax({
            url: "quotes/quotes.txt",
            type: 'GET',
            success: function (data) {
                app.buildQuotes(data);
            }
        });
    },

    /*
     * onSuccess handler for getQuotes.
     * Takes the file object and splits on double-newline.
     *
     * @param data file obj
     * @returns this.quotes (Array)
     */
    buildQuotes: function (data) {
        this.quotes = data.split('\n\n');
        return this.quotes;
    },

    /*
     * Bases the random integer range
     * on the length of the array that we're using.
     *
     * @returns this.randint (integer)
     */
    randomize: function () {

        this.randint = Math.floor(Math.random() * this.quotes.length);

        return this.randint;
    },

    /*
     * Set the title and randomly choose a quote for display.
     *
     * @returns this.quote (string)
     */
    showQuotes: function () {

        this.getQuotes();

        this.quote = this.quotes[this.randomize()];

        $('#quotesC')
            .empty()
            .append('<p>' + this.quote + '</p>');

        return this.quote;
    }
};

$(document).ready(function () {
    // Execute
    app.showQuotes();
    $('#quotesC')
        .empty()
        .append("<p>Click 'Next Quote' to get a quote!</p>");

    $('#next')
        .button()
        .click(function () {
            app.showQuotes();
        })
        .tooltip({
            show: {
                effect: "fold",
                duration: 1000
            }
        }
    );
    $('#foot')
        .button()
        .tooltip({
            show: {
                effect: "fold",
                duration: 1000
            },
            content: "Visit brianctomlinson.com"
        }
    );
});