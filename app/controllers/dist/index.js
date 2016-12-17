

var Projects = React.createClass({
　　getInitialState(){
	return{}
  },
  makeSlides(){
    
    var controller = new ScrollMagic.Controller({
      globalSceneOptions: {
	 triggerHook: 'onLeave'
      }
    });

    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 300})
	.setPin("#Pin1")
	.addTo(controller);
    var sceneTwo = new ScrollMagic.Scene({triggerElement: "#trigger2", duration:300})
	.setPin("#Pin2")
	.addTo(controller);
    var sceneThree = new ScrollMagic.Scene({triggerElement: "#trigger3", duration:300})
	.setPin("#Pin3")
	.addTo(controller);

  },
  componentDidMount(){
    this.makeSlides();
  },
  render() {
    
    return (
      <div className="main">
　　　　　　　　<section className="intro-page">
	</section>
	<section className="panel">
        　　<div className="spacer s2"></div>
          <div id="trigger1" className="spacer s0"></div>
	  <div id="pin1" className="pin">
		<div className="pin-box blue">One</div>
	  </div>
        　　<div classNmae="spacer s2"></div>
	</section>
	<section className="panel">
            <div className="spacer s2"></div>
          <div id="trigger2" className="spacer s0"></div>
	  <div id="pin2" className="pin">
		<div className="pin-box blue">One</div>
	  </div>
        　　<div classNmae="spacer s2"></div>
	</section>
	<section className="panel">
            <div className="spacer s2"></div>
          <div id="trigger3" className="spacer s0"></div>
	  <div id="pin3" className="pin">
		<div className="pin-box blue">One</div>
	  </div>
        　　<div classNmae="spacer s2"></div>
	</section>
      </div>
    );
  }
});


var Portfolio = React.createClass({
　　getInitialState(){
	return{about: false}
  },
  render() {
    return(
　　　　<div className="another-container">
    <div className="portfolio-page">	
      <div className="main-container">
        <ReactCSSTransitionGroup transitionName="dog" transitionEnterTimeout={500}>
        {(this.main) ? <Main /> : <Projects />}
        </ReactCSSTransitionGroup>
      </div>
    </div>
    <div className="down-arrow"　onClick={function(){console.log('g');}}><i className="fa fa-arrow-down"></i></div>
    </div>
    )
  }

})




var Main = React.createClass({
　　getInitialState(){
	return{about: false}
  },
  /*showAbout(){
      if(this.state.about == false){
	this.setState({about: true});
	$(".background").animate({
          opacity: .5
        }, 1000);
	$(".about").show("slow");
      } else {
	this.setState(about: false);
	$(".background").animate({
          opacity: 0
        }, 1000);
	$(".about").hide("slow");
      }
  },*/
  render(){
    return (
      <div className="main">
	<div className="left-vertical-text"><span onClick={showAbout.bind(this)}>{(this.about) ?　"close" : "about"}</span></div>
      <div className="right-vertical-text"><span onClick={function(){window.location.href='mailto:1478282482@qq.com';}}>1478282482@qq.com</span></div>
	<div className="name"　onClick={function(){console.log('d')}}>Joshua Edwards</div>
	<div className="post">DIGITAL DESIGNER</div>
      </div>
    );
  }
})


ReactDOM.render(
  <Projects />,
  document.getElementById('container')
)
