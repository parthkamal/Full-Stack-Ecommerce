const Category = require('../models/category')
const slugify = require('slugify')

exports.createCatergoryController = (req, res) => {
    //destructure the attributes from the req object
    const { name, parentId } = req.body;
    if (!parentId) {
        //it means the parent category is going to be created
        const categoryObject = { name, slug: slugify(name) }
        const category = new Category(categoryObject);
        category.save((error, category) => {
            if (error) return res.status(400).json(error)
            return res.status(200).json(category)
        })
    };
    //it means a subcategory is being created
    const categoryObject = {
        name, parentId, slug: slugify(name)
    }
    const category = new Category(categoryObject);
    //saving category to the database
    category.save((error, category) => {
        if (error) return res.status(400).json(error);
        return res.status(200).json(category)
    })
}


exports.getCategoryController = (req, res) => {
    //extracting all the categories from the database and returning to the user
    Category.find((error, categoryList) => {
        if (error) return res.status(400).json(error)
        return res.status(200).json(categoryList);
    })
}

