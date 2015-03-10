/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50542
Source Host           : localhost:3306
Source Database       : sec-ms

Target Server Type    : MYSQL
Target Server Version : 50542
File Encoding         : 65001

Date: 2015-03-09 17:37:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `account_info`
-- ----------------------------
DROP TABLE IF EXISTS `account_info`;
CREATE TABLE `account_info` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `account_name` varchar(255) DEFAULT NULL,
  `account_id` varchar(255) DEFAULT NULL,
  `account_password` varchar(255) DEFAULT NULL,
  `account_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of account_info
-- ----------------------------
INSERT INTO `account_info` VALUES ('1', 'qq', '253921698', 'nieyajuan,1991', 'QQ聊天工具账户密码');
INSERT INTO `account_info` VALUES ('2', '1', '1', '1', '1');
INSERT INTO `account_info` VALUES ('3', '1', '1', '1', '1');
INSERT INTO `account_info` VALUES ('4', '烽火IM', 'yizhicheng', 'nieyajuan,1991', '烽火通讯工具');
INSERT INTO `account_info` VALUES ('5', 'aa', 'aa', 'aa', 'aa');
INSERT INTO `account_info` VALUES ('6', 'aa', 'aa', 'aa', 'aa');
INSERT INTO `account_info` VALUES ('7', 'aa', 'aa', 'aa', 'aa');
INSERT INTO `account_info` VALUES ('8', 'aa', 'aa', 'aa', 'aa');
INSERT INTO `account_info` VALUES ('9', 'aa', 'aa', 'aa', 'aa');
INSERT INTO `account_info` VALUES ('10', 'aa', 'aa', 'aa', 'aa');
INSERT INTO `account_info` VALUES ('11', 'aa', 'aa', 'aa', 'aa');
INSERT INTO `account_info` VALUES ('12', 'ddd', 'dd', 'dd', 'dd');
INSERT INTO `account_info` VALUES ('13', '易支撑', 'ss', '易支撑', '易支撑');
INSERT INTO `account_info` VALUES ('14', '淘宝帐号', '253921698@qq.com', 'nieyajuan,1991', '淘宝登录帐号密码');
INSERT INTO `account_info` VALUES ('15', 'ss', 'dd', 'dd', 'dd');
INSERT INTO `account_info` VALUES ('16', 'ddd', 'dd', 'dd', 'dd');
INSERT INTO `account_info` VALUES ('17', 'dd', 'dd', 's', 's');
INSERT INTO `account_info` VALUES ('18', '1', '1', '1', '1');
INSERT INTO `account_info` VALUES ('19', '1', '1', '1', '1');
INSERT INTO `account_info` VALUES ('20', '1', '1', '1', '1');
INSERT INTO `account_info` VALUES ('21', '1', '1', '1', '1');
INSERT INTO `account_info` VALUES ('22', '1', '1', '1', '1');
INSERT INTO `account_info` VALUES ('23', 'dd', 'dd', 'dd', 'dd');
INSERT INTO `account_info` VALUES ('24', 'hh', 'hh', 'hh', 'hh');
INSERT INTO `account_info` VALUES ('25', 'dd', 'd', 'd', 'd');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sys_id` varchar(10) CHARACTER SET armscii8 DEFAULT '100000',
  `nick_name` varchar(10) DEFAULT NULL,
  `password` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '100000', 'yizhicheng', 'yangjie');
INSERT INTO `user` VALUES ('2', '100000', 'nieyajuan', 'yangjie');
INSERT INTO `user` VALUES ('70', 'nieyajuan', 'nieyajuan', '100000');
INSERT INTO `user` VALUES ('71', 'lll', 'lll', '100000');
INSERT INTO `user` VALUES ('72', 'asss', 'ss', '100000');
INSERT INTO `user` VALUES ('73', 'df', 'dd', '100000');
INSERT INTO `user` VALUES ('74', 'gg', 'gg', '100000');
INSERT INTO `user` VALUES ('75', 'ff', 'ff', '100000');
INSERT INTO `user` VALUES ('76', 'ss', 'ss', '100000');
INSERT INTO `user` VALUES ('77', 'ss', 'ss', '100000');
INSERT INTO `user` VALUES ('78', 'ss', 's', '100000');
INSERT INTO `user` VALUES ('79', 'hh', 'hh', '100000');
INSERT INTO `user` VALUES ('80', 'aa', 'aa', '100000');
INSERT INTO `user` VALUES ('81', 'dd', 'dd', '100000');
INSERT INTO `user` VALUES ('82', 'dd', 'ss', '100000');
INSERT INTO `user` VALUES ('83', 'dd', 'ss', '100000');
INSERT INTO `user` VALUES ('84', 'ss', 'ss', '100000');
INSERT INTO `user` VALUES ('85', 'dd', 'dd', '100000');
INSERT INTO `user` VALUES ('86', 'a', 'a', '100000');
INSERT INTO `user` VALUES ('87', 'aa', 'aa', '100000');
INSERT INTO `user` VALUES ('88', 'dd', 'd', '100000');
INSERT INTO `user` VALUES ('89', 'dd', 'dd', '100000');
INSERT INTO `user` VALUES ('90', 'd', 'd', '100000');
INSERT INTO `user` VALUES ('91', 'aa', 'aa', '100000');
INSERT INTO `user` VALUES ('92', '100000', 'ddd', null);
INSERT INTO `user` VALUES ('93', '100000', 'ddd', null);
INSERT INTO `user` VALUES ('94', '100000', 'ss', 'ss');
INSERT INTO `user` VALUES ('95', '100000', 'ggg', 'ggg');
INSERT INTO `user` VALUES ('96', '100000', 'ggg', 'ggg');
INSERT INTO `user` VALUES ('97', '100000', 'ddd', 'ddd');
INSERT INTO `user` VALUES ('98', '100000', 'ddd', 'ddd');
INSERT INTO `user` VALUES ('99', '100000', 'ddd', 'ddd');
INSERT INTO `user` VALUES ('100', '100000', 'ddd', 'ddd');
INSERT INTO `user` VALUES ('101', '100000', 'ddd', 'ddd');
INSERT INTO `user` VALUES ('102', '100000', 'sss', 'sss');
INSERT INTO `user` VALUES ('103', '100000', 'ss', 'ss');
INSERT INTO `user` VALUES ('104', '100000', 'ss', 'ss');
INSERT INTO `user` VALUES ('105', '100000', 'ss', 'ss');
INSERT INTO `user` VALUES ('106', '100000', 'ss', 'ss');
INSERT INTO `user` VALUES ('107', '100000', 'ss', 'ss');
INSERT INTO `user` VALUES ('108', '100000', 'aa', 'aa');
