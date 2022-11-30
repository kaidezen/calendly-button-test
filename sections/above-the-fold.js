/** @jsxImportSource theme-ui */
import { Box, Container, Heading, Text } from 'theme-ui';
import NextImage from '../components/next-image'
import banner from '../assets/images/banner.png';
import paypal from '../assets/images/paypal.png';
import google from '../assets/images/google.png';
import trustpilot from '../assets/logos/trustpilot.png';
import Calendly from '../components/calendly';

const AboveFold = () => {

  return (
    <Box id="home" as="section" sx={styles.banner}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading className="text" sx={styles.title}>
              Crush Your Goals With Your Own Success Coach
            </Heading>
            <Text className="text" as="p" sx={styles.text}>
            All high performance athletes and CEOs have a Coach to ensure they're at the top of their game.
            What the hell are you waiting for to step up to your peak?
            </Text>

            {/* CALENDLY CODE */}
            <div id="root">
              <Calendly selector="#root" />
            </div>


            <Box sx={styles.logos}>
              <NextImage src={paypal} alt="paypal" />
              <NextImage src={google} alt="google" />
              <NextImage src={trustpilot} alt="trustpilot" />
            </Box>
          </Box>
          <Box className="banner" sx={styles.illustration}>
            <NextImage src={banner} alt="banner" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboveFold;

const styles = {
  banner: {
    backgroundColor: 'secondary',
    pt: ['10px', null, null, null, null, null, '20px']
  },
  contentWrapper: {
    display: [null, null, null, 'grid', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    textAlign: ['center', null, null, 'left'],
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: [null, null, null, null, null, '100vh'],
    pt: [100, null, null, 50, 30, 0, 0],
  },
  content: {
    //maxWidth: [507, null, null, 324, 450],
  },
  title: {
    fontWeight: 'bold',
    fontSize: ['30px', null, null, null, '42px', '40px', '60px'],
    lineHeight: 1.33,
    letterSpacing: '-1px',
    color: 'accent',
  },
  text: {
    fontSize: ['14px', '14px', '14px', '16px', '16px', '18px'],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: 'whiteText',
    mt: ['14px', '19px'],
  },
  button: {
    display: 'flex',
    mt: [45, 45, 45, 25, 25],
    ml: ['auto', null, null, '0px'],
    mr: ['auto', null, null, '0px'],
  },
  logos: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ['center', null, null, 'left'],
    mt: ['20px', '45px', '45px', '30px', '45px'],
    img: {
      maxWidth: ['80px', '100%', '100%', '100%'],
      '+ img': {
        ml: ['14px', '28px', '28px', '20px'],
      },
    },
  },
  illustration: {
    display: 'block',
    mt: ['30px', '30px', 0],
    mb: ['60px', '60px', 0],
    img: {
      maxWidth: ['100%', '100%', '100%', '100%', '90%', '90%', '100%'],
    },
  },
};
