
var Panel = React.createClass({
　　getInitialState(){
	return null;
  },
　　render() {
return (
	<div className="panel">
	  <div id="pin1" className="pin">
	    <div className="pin-box">
	      <div className="project-title">{this.props.name}</div>
	      <img src={this.props.imageSrc} className="portfolio-image" />
	    </div>
	  </div>
	</div>
     );
  }
});

var Projects = React.createClass({
　　getInitialState(){
	return{panelNo: 0, panels: this.props.panels}
  },
  changePanelNo(){
    var panelNo = this.state.panelNo;
    this.setState({panelNo: panelNo + 1});
  },
  render() {

    var panel = <Panel imageSrc={this.state.panels[this.state.panelNo].imageSrc} name={this.state.panels[this.state.panelNo].name} />
    
    return (
      <div className="projects">
	{panel}
      </div>
    );
  }
});



var Portfolio = React.createClass({
　　getInitialState(){
	return{about: false, page: "main", panels: this.props.panels}
  },
  handleArrowClick(){
    var that = this;
    switch(this.state.page){
      case "main":
	$("#background").css("z-index", "10");
	$("#background").animate({
	  opacity: 1
	}, 1000, function(){that.setState({page: "projects"});})
        
	$("#background").animate({
	  opacity: 0
	}, 1000, function(){
	$("#background").css("z-index", "0");})
	break;
      case "projects":
	$("#background").css("z-index", "10");
	$("#background").animate({
	  opacity: 1
	}, 1000, function(){that.setState({page: "main"});})
        
	$("#background").animate({
	  opacity: 0
	}, 1000, function(){
	$("#background").css("z-index", "0");})
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
  checkTextColor(){
    if(this.state.page == "projects"){return "white"}
    if(this.state.page == "main" && this.state.about == false){return "black"}
    if(this.state.page == "main" && this.state.about == true){return "white"}
  },
  render() {

    
     var leftText = "about";
     var leftClick;
     var textColor;
     var triangleUp;
     switch(this.state.about){
       case true:
	 leftText = "close";
	 leftClick = this.closeAbout;
	 break;
       case false:
	　leftText = "about";
	 leftClick = this.showAbout;
	 break;
     }

     switch(this.checkTextColor()){
	case "white":
          textColor = {color: "white"}
	  break;
	case "black":
	  textColor = {color: "black"}
	  break;
     }
     
     switch(this.state.page){
	case "main":
          triangleUp = [];
	  break;
	case "projects":
	  triangleUp = <TopTriangle handleArrowClick={this.handleArrowClick} />
	  break;
     }

   
     
    console.log(this.state.about);
    var content;
    var leftButton = <LeftText closeAbout={leftClick} leftText={leftText} leftStyle={textColor} />;
　　　 var rightButton = <RightText rightStyle={textColor} />
    var about = <About /> 
    
    switch(this.state.page){
      case "main":
        content = <Main handleArrowClick={this.handleArrowClick} />;
	break;
      case "projects":
	content = <Projects panels={this.state.panels} />;
	break;
    }


    return(<div>
      <div id="background"></div>
      <div id="portfolio">
　　　　     {content}
      </div>
      {triangleUp}
      {leftButton}
      {rightButton}
      {about}
    </div>
    )
  }

})

var TopTriangle = React.createClass({
  getInitialState(){
    return {}
  },
  render(){
    return(<div className="top-triangle-container"><img className="up-arrow" src="public/img/triangle-up.png"　onClick={this.props.handleArrowClick} /></div>)
  }
})

var LeftText = React.createClass({
  getInitialState(){
    return {}
  },
  render(){
    return(<div id="left" style={this.props.leftStyle} className="left-vertical-text" onClick={this.props.closeAbout}>{this.props.leftText}</div>)
  }
})

var RightText = React.createClass({
  getInitialState(){
    return {}
  },
  emailClick(){
    window.location.href='mailto:1478282482@qq.com';
  },
  render(){
    return(<div style={this.props.rightStyle} className="right-vertical-text"><span onClick={this.emailClick}>1478282482@qq.com</span></div>)
  }
})

var Main = React.createClass({
  getInitialState(){
    return{}
  },
  nameClick(){
    console.log('clicked');
  },
  render(){
     return(
     <div className="main">
	
	
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

var panels = [{name: "Pomodoro", imageSrc: "public/img/project-one.png"}, {name: "Calculator", imageSrc: "public/img/project-two.png"}, {name: "Weather App", imageSrc: "public/img/project-three.png"}]

ReactDOM.render(
  <Portfolio panels={panels}/>,
  document.getElementById('container')
)
