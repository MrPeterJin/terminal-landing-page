import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        


*******            **                    **   **                      
/**////**          /**                   /**  **                       
/**   /**  *****  ******  *****  ******  /** **    ******   ********** 
/*******  **///**///**/  **///**//**//*  /****    //////** //**//**//**
/**////  /*******  /**  /******* /** /   /**/**    *******  /** /** /**
/**      /**////   /**  /**////  /**     /**//**  **////**  /** /** /**
/**      //******  //** //******/***     /** //**//******** *** /** /**
//        //////    //   ////// ///      //   //  //////// ///  //  //   

          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`

*******          **                
/**////**        /**                
/**   /*******  ****** *****  ******
/*********///**///**/ **///**//**//*
/**/////*******  /** /******* /** / 
/**    /**////   /** /**////  /**   
/**    //******  //**//******/***   
//      //////    //  ////// ///    



**   **                      
/**  **                       
/** **    ******   ********** 
/****    //////** //**//**//**
/**/**    *******  /** /** /**
/**//**  **////**  /** /** /**
/** //**//******** *** /** /**
//   //  //////// ///  //  // 
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>
          Welcome to Peter Kam's terminal-style homepage!
          </div>
        <div>
          Feel free to discover by typing corresponding commands.
          </div>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
        <Seperator>----</Seperator>
        <div>
          This project's source code can be found in this project's{" "}
          <Link href="https://github.com/MrPeterJin/terminal-landing-page/">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                  ,##,,eew,
                ,##############C
                a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
