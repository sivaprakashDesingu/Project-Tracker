import React, { Component } from 'react';
import './Header.css';
import logo from './../assests/images/logo/logo.png';

class Header extends React.Component {


    render() {
        return (
            <div>
                <header class="clr">
                <div class="fl mnlogo">
                    <a href="https://www.postgraduatesearch.com">
                        <img class="dsklg" src="https://images3.content-hcs.com/pgs-cont/img/pgs_dslogo.png" alt="postgraduatesearch" width="154" height="40" />
                        <img class="mblg" src="https://images3.content-hcs.com/pgs-cont/img/pgs_mblogo.png" alt="postgraduatesearch" width="138" height="30" />
                    </a>
                </div>
                <div class="fr">
                    <nav class="menu" >
                        <a aria-label="Mobile menu close icon" href="javascript:void(0)" id="navcls" class="close">
                            <div class="clsicn"></div>
                        </a>
                        <ul id="qualmn">
                            <li><a href="https://www.postgraduatesearch.com/masters">Masters</a>
                                <div class="hovln liblu"></div>
                            </li>
                            <li><a href="https://www.postgraduatesearch.com/phd">PhD</a>
                                <div class="hovln dkred"></div>
                            </li>
                            <li><a href="https://www.postgraduatesearch.com/pgcert">PGCert</a>
                                <div class="hovln tqblu"></div>
                            </li>
                            <li><a href="https://www.postgraduatesearch.com/pgdip">PGDip</a>
                                <div class="hovln dkblu"></div>
                            </li>
                            <li><a href="https://www.postgraduatesearch.com/mba">MBA</a>
                                <div class="hovln gsgrn"></div>
                            </li>
                            <li><a href="https://www.postgraduatesearch.com/pgce">PGCE</a>
                                <div class="hovln lipink"></div>
                            </li>
                            <li class="pipe">|</li>
                            <li><a href="https://www.postgraduatesearch.com/funding">Funding</a>
                                <div class="hovln dktqblu"></div>
                            </li>
                            <li><a href="https://www.postgraduatesearch.com/advice">Advice</a>
                                <div class="hovln"></div>
                            </li>
                            <li><a href="https://www.postgraduatesearch.com/reviews">Reviews</a>
                                <div class="hovln"></div>
                            </li>
                            <li class="pipe">|</li>
                        </ul>
                        <ul id="lgnmn">
                            <li id="login" class="lg_sgn">
                            <a href="javascript:newPgsLbx('signin','','','','','');">Log in</a>
                                <div class="hovln"></div>
                                <span class="slsh"> / </span>
                                <a href="javascript:void(0)" rel="nofollow">Signup</a>
                                <div class="hovln"></div>
                            </li>
                        </ul>
                    </nav>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;