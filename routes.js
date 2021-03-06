module.exports = (app, allModels) => {
  const controllerCallbacks = require("./controllers/controllers")(allModels);

  app.get("/home", controllerCallbacks.getHome);

  app.post("/home/login/user", controllerCallbacks.getUserLoginDetails);
  app.post("/home/login/merchant", controllerCallbacks.getMerchantLoginDetails);

  app.post("/home/register/user", controllerCallbacks.postUserDetails);
  app.post("/home/register/merchant", controllerCallbacks.postMerchantDetails);

  app.get("/logout", controllerCallbacks.logout);

  app.get("/dashboard/merchant", controllerCallbacks.getDashboardMerchant);
  app.post("/newListing", controllerCallbacks.getNewListing);
  app.get("/all/listing/:id", controllerCallbacks.getAllListing);
  app.post("/all/listing", controllerCallbacks.getReceiptListing);
  app.post("/togglelisting", controllerCallbacks.getToggleListing);
  app.get("/deletedlisting", controllerCallbacks.getDeletedListing);
  app.post("/tidyuplisting", controllerCallbacks.getTidyUpListing);
  app.get("/editlisting", controllerCallbacks.getEditListing);
  app.post("/editlisting", controllerCallbacks.getUpdateListing);
  app.get("/orderhistory/:id", controllerCallbacks.getOrderHistory);

  //get timeline for users to see all merchants
  app.get("/timeline", controllerCallbacks.getTimeline);
  //get indiv shop for users : all listings in merchant

  app.get("/indivshop/:id", controllerCallbacks.getIndivShop);
  app.post("/submitOrder", controllerCallbacks.postSubmitReceiptOrder);
  app.get("/merchantorders/:id", controllerCallbacks.getMerchantOrders);
  //get ratings by merchant
  app.get("/ratings/:id", controllerCallbacks.getRatings);
  //post ratings by user
  app.post("/ratelisting", controllerCallbacks.postUserRatings);
  //get ratings for user that user did not rate before
  app.get("/getratingsuser/:userid/:receiptid", controllerCallbacks.getUserRatings);
  //CATCH ALL. PLS LEAVE AT THE BOTTOM
  app.get("*", controllerCallbacks.catchAll)

};
