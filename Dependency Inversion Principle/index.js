//abstraction
class SocialMediaApp {
    makeComment() {
      throw new Error("Method 'makeComment()' must be implemented.");
    }
  
    shareContent() {
      throw new Error("Method 'shareContent()' must be implemented.");
    }
  }

//low level class 1
  class Instagram extends SocialMediaApp {
    makeComment() {
      console.log("Instagram: Making a comment.");
    }
  
    shareContent() {
      console.log("Instagram: Sharing a post.");
    }
  
    sharePost() {
      this.shareContent();
    }
  }
  
//low level class 2
  class YouTube extends SocialMediaApp {
    makeComment() {
      console.log("YouTube: Making a comment.");
    }
  
    shareContent() {
      console.log("YouTube: Sharing a video.");
    }
  
    shareVideo() {
      this.shareContent();
    }
  }
  
//high level class
  class Notification {
    constructor(socialMediaApp) {
      if (!(socialMediaApp instanceof SocialMediaApp)) {
        throw new Error("must be an instance of socialMediaApp!");
      }
      this.socialMediaApp = socialMediaApp;
    }
  
    notify() {
      this.socialMediaApp.shareContent();
      this.socialMediaApp.makeComment();
    }
  }
