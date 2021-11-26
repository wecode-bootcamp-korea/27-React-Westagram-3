import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav({ setCurrentPopup, currentPopup }) {
  const usersInfo = [
    {
      id: 1,
      username: '짹짹',
      userInfo: '나의 잭',
      img: 'p4.jpeg',
    },
    {
      id: 2,
      username: 'hellolove',
      userInfo: '',
      img: 'search2.jpg',
    },
    {
      id: 3,
      username: 'nypl',
      userInfo: '',
      img: 'p1.jpeg',
    },
    {
      id: 4,
      username: 'hwnhwan12',
      userInfo: '겸손',
      img: 'p7.jpeg',
    },
    {
      id: 5,
      username: 'helloworld',
      userInfo: 'love love love',
      img: 'search1.jpg',
    },
    {
      id: 6,
      username: 'hellowecode',
      userInfo: '에러로부터 코드를 지키자!',
      img: 'post3.png',
    },
  ];

  const [searchInput, setSearchInput] = useState('');
  const [searchResultNone, setSearchResultNone] = useState(false);
  const [searchResult, setSearchResult] = useState('');
  const [searchFocus, setSearchFocus] = useState(false);
  const [showSearchText, setShowSearchText] = useState(true);
  const searchRef = useRef();

  const getUsers = (username, usersInfo) => {
    return usersInfo.filter(user => user.username.includes(username));
  };

  const showSearchedUsers = e => {
    const searchValue = e.target.value;
    setSearchInput(searchValue);

    if (!searchValue) {
      setSearchResult('');
      setSearchResultNone(true);
      return;
    }
    const filteredUsers = getUsers(searchValue, usersInfo);
    if (!filteredUsers.length) {
      setSearchResultNone(true);
      setSearchResult('');
      return;
    }
    setSearchResultNone(false);
    setSearchResult(filteredUsers);
  };

  const onSearchWrapperClick = e => {
    e.stopPropagation();
    searchRef.current.focus();
  };

  const onSearchInputFocus = () => {
    setCurrentPopup('search');
    setSearchFocus(true);
    setShowSearchText(false);
  };

  const onSearchInputBlur = () => {
    !searchInput ? setShowSearchText(true) : setShowSearchText(false);
  };

  const onNavProfileClick = e => {
    e.stopPropagation();
    setCurrentPopup('profileDropdown');
  };
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <Link className="logo" to="/main-oh">
          <img src="/images/sunghyunKim/instagram.png" alt="logo" />
          <div className="logo__title">Westagram</div>
        </Link>
        <div
          id="search"
          className="search input"
          onClick={onSearchWrapperClick}
        >
          <input
            type="text"
            className="search__input"
            ref={searchRef}
            onFocus={onSearchInputFocus}
            onBlur={onSearchInputBlur}
            onChange={e => showSearchedUsers(e)}
            value={searchInput}
          />
          <div
            className="search__text"
            style={{ visibility: showSearchText ? 'visible' : 'hidden' }}
          >
            <i className="fas fa-search" />
            <span>Search</span>
          </div>
          <div
            className="search-users"
            style={{
              visibility:
                currentPopup === 'search' && searchFocus ? 'visible' : 'hidden',
            }}
          >
            <div className="search-square dropdownSquare" />
            <ul className="search-results dropdown">
              {searchResultNone ? (
                <li className="search-results__empty">검색결과 없음</li>
              ) : (
                ''
              )}
              {!!searchResult.length
                ? searchResult.map((user, i) => {
                    const { username, userInfo, img } = user;
                    return (
                      <li className="search-result" key={i}>
                        <img
                          src={`/images/sunghyunKim/${img}`}
                          alt="userprofile"
                        />
                        <div className="search-result__info">
                          <b>{username}</b>
                          <span>{userInfo}</span>
                        </div>
                      </li>
                    );
                  })
                : ''}
            </ul>
          </div>
        </div>

        <div className="nav-btns">
          <div className="nav-btn">
            <img src="/images/sunghyunKim/explore.png" alt="explore" />
            <div className="nav-btn__more nav-btn__more--none" />
          </div>
          <div className="nav-btn">
            <img src="/images/sunghyunKim/heart.png" alt="heart" />
            <div className="nav-btn__more" />
          </div>
          <div
            className="nav-btn__profile nav-btn"
            onClick={e => onNavProfileClick(e)}
          >
            <img src="/images/eojineOh/profile_of_ej__oh.JPG" alt="profile" />
            <div className="nav-btn__more nav-btn__more--none" />
            <div
              className="profile-dropdown"
              style={{
                visibility:
                  currentPopup === 'profileDropdown' ? 'visible' : 'hidden',
              }}
            >
              <div className="profile-dropdown__square dropdownSquare" />
              <ul className="profile-dropdown__content dropdown">
                <li className="profile-dropdown__item">
                  <i className="fas fa-user-alt" />
                  <span>프로필</span>
                </li>
                <li className="profile-dropdown__item">
                  <i className="far fa-bookmark" />
                  <span>저장됨</span>
                </li>
                <li className="profile-dropdown__item">
                  <i className="fas fa-cog" />
                  <span>설정</span>
                </li>
                <li className="profile-dropdown__item">로그아웃</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
