import styled from "styled-components";

const NavDekstop = styled.ul`
    display: flex;
    span {
      margin-right: -20px;
      color: #5c5c5c;
    }
    a {
      padding-top: 13px;
      text-decoration: none;
    }

    li {
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.5px;
      color: #5c5c5c;
      margin: 0 2rem;
      position: relative;
      list-style: none;
    }
    li:hover {
      color: #008fff;
      border-bottom: 2px solid #008fff;
    }
    span:hover {
      color: #008fff;
    }
    .current {
      li,
      span {
        color: #008fff;
      }
    }
  `;

const NavMobile = styled.ul`
      span {
        margin-top:1rem;
        margin-right: -20px;
        color: #5c5c5c;
      }
      a {
        padding-top: 13px;
        text-decoration: none;
        border-bottom: 1px solid #5c5c5c;
      }
  
      li {
        font-weight: bold;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.5px;
        color: #5c5c5c;
        margin: 1rem 2rem;
        position: relative;
        list-style: none;
      }
      li:hover {
        color: #008fff;
        border-bottom: 2px solid #008fff;
      }
      span:hover {
        color: #008fff;
      }
      .current {
        li,
        span {
          color: #008fff;
        }
      }
    `;

export {
  NavMobile,
  NavDekstop
}