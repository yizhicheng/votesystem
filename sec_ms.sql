/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50626
Source Host           : localhost:3306
Source Database       : sec_ms

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2015-09-25 09:08:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for account_info
-- ----------------------------
DROP TABLE IF EXISTS `account_info`;
CREATE TABLE `account_info` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `account_name` varchar(255) DEFAULT NULL,
  `account_id` varchar(255) DEFAULT NULL,
  `account_password` varchar(255) DEFAULT NULL,
  `account_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of account_info
-- ----------------------------
INSERT INTO `account_info` VALUES ('1', 'qq', '253921698', 'nieyajuan,1991', 'QQ聊天工具账户密码');
INSERT INTO `account_info` VALUES ('4', '烽火IM', 'yizhicheng', 'nieyajuan,1991', '烽火通讯工具');
INSERT INTO `account_info` VALUES ('14', '淘宝帐号', '253921698@qq.com', 'nieyajuan,1991', '淘宝登录帐号密码');
INSERT INTO `account_info` VALUES ('26', 'fc160后台`', 'fc160', 'Fc160admin', 'fc160后台');
INSERT INTO `account_info` VALUES ('35', '微信公众平台', null, 'nieyajuan1991', '微信公众平台开发者中心账户密码');
INSERT INTO `account_info` VALUES ('36', 'fc160服务器', null, 'FC160com', 'fc160服务器密码账户');
INSERT INTO `account_info` VALUES ('37', '苏宁oa', '15070592', 'Nieyajuan,1991', '苏宁soa账号密码');
INSERT INTO `account_info` VALUES ('38', '易付宝', '18770531556', 'nieyajuan1991（登录密码）', 'nieyajuan,1991（支付密码）');
INSERT INTO `account_info` VALUES ('39', '南京公积金账户', '362202198811250817', '268200', '打电话可以查询到账户');

-- ----------------------------
-- Table structure for user
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
