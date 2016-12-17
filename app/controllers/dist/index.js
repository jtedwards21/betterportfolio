

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

    var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", duration: 500})
	.setPin("#Pin1")
	.addTo(controller);
    var sceneTwo = new ScrollMagic.Scene({triggerElement: "#trigger2", duration:500})
	.setPin("#Pin2")
	.addTo(controller);
    var sceneThree = new ScrollMagic.Scene({triggerElement: "#trigger3", duration:500})
	.setPin("#Pin3")
	.addTo(controller);

  },
  componentDidMount(){
    this.makeSlides();
  },
  showAbout(){
    this.props.showAbout();
  },
  render() {
    
    return (
      <div className="projects">
　　　　　　　　<section className="intro-page">
	  
	</section>
	<section className="panel">
        　　<div className="spacer s2"></div>
          <div id="trigger1" className="spacer s0"></div>
	  <div id="pin1" className="pin">
		<div className="pin-box">
		　　<div className="project-title">Pomodoro</div>
		  <img src="public/img/project-one.png" className="portfolio-image" />
	　　　　　　　　</div>
	  </div>
        　　<div classNmae="spacer s2"></div>
	</section>
	<section className="panel">
            <div className="spacer s2"></div>
          <div id="trigger2" className="spacer s0"></div>
	  <div id="pin2" className="pin">
		<div className="pin-box">
		　　<div className="project-title">Calculator</div>
		  <img src="public/img/project-two.png" className="portfolio-image" />
	　　　　　　　　</div>
	  </div>
        　　<div classNmae="spacer s2"></div>
	</section>
	<section className="panel">
            <div className="spacer s2"></div>
          <div id="trigger3" className="spacer s0"></div>
	  <div id="pin3" className="pin">
		<div className="pin-box">
		　　<div className="project-title">Dogs</div>
		  <img src="public/img/project-three.png" className="portfolio-image" />
	　　　　　　　　</div>
	  </div>
        　　<div classNmae="spacer s2"></div>
	</section>
      </div>
    );
  }
});


var Portfolio = React.createClass({
　　getInitialState(){
	return{about: false, page: "main"}
  },
  handleArrowClick(){
    switch(this.state.page){
      case "main":
        this.setState({page: "projects"});
	break;
      case "projects":
	this.setState({page: "main"});
	break;
    }
  },
  closeAbout(){
    console.log('close');
    this.setState({about:false});
    $("#background").css("z-index","0");
    $("#background").animate({
	opacity: 0
    }, 1000);
　　　　
    $("#hidden-left").css("z-index","0");
    $("#hidden-left").animate({
	opacity: 0
    }, 1000);
    $("#about").css("z-index", "0");
    $("#about").hide(1000)
  },
  showAbout(){
    console.log("show About");
    this.setState({about:true});
    $("#background").css("z-index","3");
    $("#background").animate({
	opacity: .9
    }, 1000);
　　　　
    $("#hidden-left").css("z-index","4");
    $("#hidden-left").animate({
	opacity: 1
    }, 1000);
    $("#about").css("z-index", "4");
    $("#about").show(1000)
  },
  render() {
    var content;
    var leftText = <LeftText closeAbout={this.closeAbout} />;
    var about = <About /> 
    
    switch(this.state.page){
      case "main":
        content = <Main handleArrowClick={this.handleArrowClick} showAbout={this.showAbout} about={this.state.about} />;
	break;
      case "projects":
	content = <Projects showAbout={this.showAbout} />;
	break;
    }


    return(<div>
      <div id="background"></div>
      <div id="portfolio">
　　　　     {content}
      </div>
      {leftText}
      {about}
    </div>
    )
  }

})

var LeftText = React.createClass({
  getInitialState(){
    return {}
  },
  render(){
    return(<div id="hidden-left" className="left-vertical-text hidden" onClick={this.props.closeAbout}>close</div>)
  }
})

var Main = React.createClass({
  getInitialState(){
    return{}
  },
  nameClick(){
    console.log('clicked');
  },
  emailClick(){
    window.location.href='mailto:1478282482@qq.com';
  },
  render(){
     var leftText = ""
     var leftClick;
     switch(this.props.about){
       case true:
	 leftText = "";
	 leftClick = this.props.showAbout;
	 break;
       case false:
	　leftText = "about";
	 leftClick = this.props.showAbout;
	 break;
     }
     return(
     <div className="main">
	
    　　　　<div className="left-vertical-text"><span onClick={leftClick}>{leftText}</span></div>
	<div className="right-vertical-text"><span onClick={this.emailClick}>1478282482@qq.com</span></div>
	<div className="main-text-container">
	  <div className="name"　onClick={this.nameClick}>Joshua Edwards</div>
	  <div className="post">DIGITAL DESIGNER</div>
	</div>
	<img className="down-arrow" src="public/img/triangle.png"　onClick={this.props.handleArrowClick} />
     </div>
	)
  }
})




var About = React.createClass({
　　getInitialState(){
	return{}
  },
  render(){
	return(
	  <div id="about">
            <div className="title">Hello,</div>
            <div className="text-container">
            <span className="sub-title">we are a web development firm</span>
            <span className="plain-text">Here are some of our awards and other stuff</span>
	    </div>
          </div>
        )
  }


})

ReactDOM.render(
  <Portfolio />,
  document.getElementById('container')
)
