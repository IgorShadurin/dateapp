import './Activity.css';

import React, { Component } from 'react';
import { PanelHeader, Button, Spinner, Group, Header, HorizontalScroll, Cell, Tooltip } from '@vkontakte/vkui';
import * as actions from '../../actions';
import * as activityActions from '../../actions/activity';
import * as accountActions from '../../actions/account';
import * as utils from '../../utils';
import * as pages from '../../constants/pages';
import * as api from '../../services/api';
import NotificationsPermission from '../../components/NotificationsPermission/NotificationsPermission';
import Icon24Like from '@vkontakte/icons/dist/24/like';

export default class Activity extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      isFailed: false
    };
  }

  componentDidMount() {
    this._load();
    this.refs['wrap'].style.paddingBottom = (utils.getTabBarHeight() + 16) + 'px';
    accountActions.resetBadge();

    utils.statReachGoal('page_activity');

    if (actions.isNeedFeatureBoxShow) {
      actions.setNeedFeatureBoxState(false);
      this._featureDidPress();
    }

    if (!window.isDG) {
      //utils.initYAActivityBlock();
    }
  }

  render() {
    return (
      <div ref="wrap">
        <PanelHeader>
          Активность
        </PanelHeader>
        {this._renderFeatured()}
        {this._renderLikes()}
        <div id="yandex_rtb_R-A-159294-836" />
        <Group>
          <div className="im_dialogs">
            {this._renderDialogs()}
          </div>
        </Group>
      </div>
    )
  }

  _renderDialogs() {
    const dialogs = this.props.state.dialogs;

    if (this.state.isLoading && dialogs.length === 0) {
      return <div className="Activity__loader"><Spinner/></div>;
    }

    if (this.state.isFailed) {
      return <div className="Activity__failed">
        <div className="Activity__failed_msg">Произошла ошибка</div>
        <Button size="l" onClick={this._load}>Повторить</Button>
      </div>;
    }

    if (dialogs.length === 0) {
      return (
        <div className="im_dialogs_empty">
          <div className="im_dialogs_empty_title">Начните поиск пар</div>
          <div className="im_dialogs_empty_caption">Вы начнёте видеть пары, как только получите первый взаимный лайк.</div>
          <Button size="l" onClick={() => actions.setTab('cards')}>Начать знакомиться</Button>
        </div>
      );
    }

    return dialogs.map((dialog) => {
      let text;
      switch (dialog.message.system) {
        case activityActions.SystemMessageType.match:
          text = <div className="im_dialog_system">Новая пара! Скажи «привет»! 👋</div>;
          break;
        case activityActions.SystemMessageType.gift:
          text = <div className="im_dialog_system">Подарок</div>;
          break;
        default:
          if (dialog.message.kludges.photo_url) {
            text = 'Фотография';
          } else {
            text = dialog.message.text;
          }
          text = (dialog.message.inbox ? '' : 'Вы: ') + text;
      }

      const user = this.props.state.usersInfo[dialog.user.id];
      return (
        <div className="im_dialog" key={dialog.id} onClick={() => actions.openChat(dialog.id)}>
          <div className="im_dialog_photo" style={{backgroundImage: `url(${user.small_photo})`}} />
          <div className="im_dialog_cont">
            <div className="im_dialog_name">{user.name}</div>
            <div className="im_dialog_message">{text}</div>
          </div>
          <div className="im_dialog_badge">{dialog.badge > 0 && dialog.badge}</div>
          <div className="im_dialog_separator" />
        </div>
      )
    });
  }

  _renderFeatured() {
    const users = this.props.state.featuredUsers;

    if (users.length === 0) {
      return null;
    }

    utils.statReachGoal('feature_block_view');

    return (
      <Group>
        <div className="live_feed_featured">
          {this._renderFeaturedRows(users)}
        </div>
      </Group>
    )
  }

  _renderFeaturedRows(users) {
    let res = users.map((user, i) => {
      return (
        <div
          className="live_feed_featured_item"
          key={i}
          onClick={() => actions.go(pages.PROFILE, {user: user, fromFeature: true})}
        >
          <div className="live_feed_featured_item_photo" style={{backgroundImage: `url(${user.small_photo})`}}>
            <div className="live_feed_featured_item_name">{user.name}</div>
          </div>
        </div>
      )
    });

    let curUser = this.props.state.usersInfo[this.props.state.userId];
    /*res.unshift(<div
      className="live_feed_featured_item add_btn"
      key={-1}
      onClick={this._featureDidPress}
    >
      <div className="live_feed_featured_item_photo" style={{backgroundImage: `url(${curUser.small_photo})`}} />
    </div>);*/

    res.unshift(<Tooltip
      text="Хотите больше лайков?"
      key={-1}
      isShown={this.props.state.isFeatureTTShown}
      onClose={activityActions.hideFeatureTT}
    >
      <div
        className="live_feed_featured_pay_button"
        key={-1}
        onClick={this._featureDidPress}
      >
        <div className="live_feed_featured_pay_button_text">Хочу<br/>сюда</div>
      </div>
    </Tooltip>);

    return res;
  }

  _renderLikes() {
    if (this.state.isLoading && this.props.state.dialogs.length === 0) {
      return null;
    }

    const likes = this.props.state.likes;
    return <Group>
      <Cell
        before={<Icon24Like />}
        expandable
        indicator={this.props.state.hasLikesBadge && <div className="Activity__likes-badge" />}
        onClick={() => {
          actions.openLikes();
          utils.statReachGoal('likes_open_modal');
        }}
      >Лайки</Cell>
      {likes.length > 0 && <HorizontalScroll>
        <div className="likes_rows">
          {this._renderLikesRows(likes)}
        </div>
      </HorizontalScroll>}
    </Group>;
  }

  _renderLikesRows(likes) {
    return likes.map((like) => {
      const className = utils.classNames({
        likes_row: true,
        unread: like.unread
      });
      return (
        <div
          className={className}
          key={like.user.id}
          onClick={() => {
            actions.openLikes();
            utils.statReachGoal('likes_open_modal');
          }}
        >
          <div className="likes_row_photo_wrap">
            <div className="likes_row_photo" style={{backgroundImage: `url(${like.user.small_photo})`}} />
            <div className="likes_row_new_indicator" />
          </div>
        </div>
      )
    });
  }

  _load = () => {
    this.setState({
      isLoading: true,
      isFailed: false
    });
    activityActions.load().then(() => {
      this.setState({
        isLoading: false
      });
    }).catch(() => {
      this.setState({
        isLoading: false,
        isFailed: true
      });
    });
  };

  _featureDidPress = () => {
    const btnText = window.isDG ? 'Получить за 21₽' : 'Получить за 42₽';
    actions.setPopout(<NotificationsPermission
      title="Больше лайков"
      caption="Окажитесь на виду у всех — разместите анкету над сообщениями"
      type="likes"
      button={btnText}
      onClick={() => {
        actions.loaderShow();

        if (window.isDG) {
          api.showOrderBox('feature_feed').then(() => {
            actions.loaderSuccess();
            activityActions.addMeToFeatured();
          }).catch((isFailed) => {
            if (isFailed) {
              actions.showError();
            } else {
              actions.loaderHide();
            }
          });
        } else {
          /*if (this.props.state.userId === 1) {
            actions.vkPay('feature').then(() => {
              actions.loaderSuccess();
              activityActions.addMeToFeatured();
            }).catch(() => actions.showError());
          } else {*/
            actions.vkPayRequest(42, 'Больше просмотров.').then(() => {
              actions.loaderSuccess();
              activityActions.addMeToFeatured();
            }).catch(() => actions.showError());
          //}
        }

        utils.statReachGoal('feature_buy_btn');
      }}
    />);

    utils.statReachGoal('feature_btn');
  };
}
