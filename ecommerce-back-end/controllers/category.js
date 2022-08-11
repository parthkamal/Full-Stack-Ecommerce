const Category = require('../models/category')
const slugify = require('slugify')

//create category controller only be accessed by admin
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

function createCategories(categories,parentId=null){
    //middleware to all the categories in the hirarchical form
    const categoryList=[];
    let category;
    if(parentId==null)category=categories.filter(cat=>cat.parentId ===null );
    else category=categories.filter(cat=>cat.parentId==parentId);

    for(let cat of category){
        categoryList.push({
            _id:cat._id,
            name: cat.name,
            slug:cat.slug,
            children:createCategories(categories,cat._id)
        });
    }
    console.log(categoryList)
    return categoryList;
}

//get category controller can be accessed from any one
exports.getCategoryController = (req, res) => {
    //extracting all the categories from the database and returning to the user
    Category.find((error, categories) => {
        if (error) return res.status(400).json(error);
        if(categories)return res.status(200).json({categories:createCategories(categories)})
    })
}

//delete category controller
exports.deleteCategoryController=(req,res)=>{
    Category.deleteMany((error,deletedResult)=>{
        if(error)return res.status(400).json(error)
        return res.status(200).json({message:"deleted category successfully"})
    })
}

