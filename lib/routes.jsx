
FlowRouter.route('/',{
  name: 'Home', 
  action(params) {
    ReactLayout.render(MainLayout, { 
      content:  <Home />
    });
  }
});


