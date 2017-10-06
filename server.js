var express = require('express')
    , logger = require('morgan')
    , favicon = require('serve-favicon')
    , path = require('path')
    , app = express()
    , home = require('jade').compileFile(__dirname + '/source/templates/homepage_v2.jade')
    , news = require('jade').compileFile(__dirname + '/source/templates/news.jade')
    , contact = require('jade').compileFile(__dirname + '/source/templates/contact.jade')
    , about = require('jade').compileFile(__dirname + '/source/templates/about.jade')
    , blog = require('jade').compileFile(__dirname + '/source/templates/blog_v2.jade')
    , reviews = require('jade').compileFile(__dirname + '/source/templates/reviews.jade');

app.use(logger('dev'));
app.use(express.static(__dirname + '/static'));
app.use(favicon(path.join(__dirname, 'static','images', 'favicon.ico')));

app.get('/', function (req, res, next) {
    try {
        var html = home({ title: 'Home' });
        res.send(html)
    } catch (e) {
        next(e)
    }
});

app.get('/news', function (req, res, next) {
    try {
        var html = news({ title: 'News' });
        res.send(html)
    } catch (e) {
        next(e)
    }
});

app.get('/contact', function (req, res, next) {
    try {
        var html = contact({ title: 'Contact' });
        res.send(html)
    } catch (e) {
        next(e)
    }
});

app.get('/about', function (req, res, next) {
    try {
        var html = about({ title: 'About me' });
        res.send(html)
    } catch (e) {
        next(e)
    }
});

app.get('/blog', function (req, res, next) {
    try {
        var html = blog({ title: 'Blog' });
        res.send(html)
    } catch (e) {
        next(e)
    }
});

app.get('/reviews', function (req, res, next) {
    try {
        var html = reviews({ title: 'Reviews' });
        res.send(html)
    } catch (e) {
        next(e)
    }
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
});
