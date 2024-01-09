import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGithub,
  faXTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    100.26deg,
    rgba(0, 102, 255, 0.05) 42.33%,
    rgba(150, 0, 225, 0.05) 127.07%
  );
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: white;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const YouTubeNavLink = styled(NavLink)`
  &:hover {
    color: red;
  }
`;

const FiverNavLink = styled(NavLink)`
  &:hover {
    color: green;
  }
`;

const UpworkNavLink = styled(NavLink)`
  &:hover {
    color: green;
  }
`;

const LinkedInNavLink = styled(NavLink)`
  &:hover {
    color: blue;
  }
`;

const GithubNavLink = styled(NavLink)`
  &:hover {
    color: black;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Nav>
          <NavLink href="#about">Home</NavLink>
          <YouTubeNavLink href="https://www.youtube.com/@itx_bilal172" target="_blank">
            YouTube
          </YouTubeNavLink>
          <NavLink href="mailto:contact.bilalofficial@gmail.com">Contact Us</NavLink>
          <FiverNavLink href="https://www.fiverr.com/itxbilal172"target="_blank" >Fiver</FiverNavLink>
          <UpworkNavLink href="https://www.upwork.com/freelancers/~01ba8310b3e933d19e?referrer_url_path=/nx/search/talent/details/~01ba8310b3e933d19e/profile" target="_blank" >Upwork</UpworkNavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href="https://www.facebook.com/itxxbilal172" target="_blank">
            <FontAwesomeIcon icon={faFacebook} />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://twitter.com/itx_bilal172" target="_blank">
            <FontAwesomeIcon icon={faXTwitter} />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://github.com/itxxBilal" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.youtube.com/@itx_bilal172" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.linkedin.com/in/bilal172/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright> &copy;2023 - {new Date().getFullYear()} Developed by Bilal</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
