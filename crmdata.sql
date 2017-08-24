/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50051
Source Host           : localhost:3306
Source Database       : crmdata

Target Server Type    : MYSQL
Target Server Version : 50051
File Encoding         : 65001

Date: 2017-08-05 16:20:14
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `userdata`
-- ----------------------------
DROP TABLE IF EXISTS `userdata`;
CREATE TABLE `userdata` (
  `id` int(11) NOT NULL auto_increment COMMENT '用户的id',
  `uname` varchar(11) NOT NULL COMMENT '用户的用户名',
  `pwd` varchar(25) NOT NULL COMMENT '用户的密码',
  `email` varchar(22) NOT NULL COMMENT '用户的邮箱',
  `userImg` varchar(17) default NULL COMMENT '注册用户的头像',
  PRIMARY KEY  (`id`)
) ENGINE=MEMORY DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userdata
-- ----------------------------

-- ----------------------------
-- Table structure for `workdata`
-- ----------------------------
DROP TABLE IF EXISTS `workdata`;
CREATE TABLE `workdata` (
  `id` int(11) NOT NULL auto_increment COMMENT '员工信息ID',
  `name` varchar(11) NOT NULL COMMENT '员工的名字',
  `sex` varchar(11) NOT NULL COMMENT '员工的性别',
  `age` int(11) NOT NULL COMMENT '年龄',
  `img` varchar(20) default NULL COMMENT '用户的头像',
  `number` varchar(20) default NULL COMMENT '用户证件号',
  `tel` varchar(11) default NULL COMMENT '用户手机号',
  `familyTel` varchar(15) default NULL COMMENT '用户的家庭电话',
  `eml` varchar(20) default NULL COMMENT '用户的邮箱',
  `QQ` varchar(11) default NULL,
  `address` varchar(25) default NULL COMMENT '员工住址',
  `matrimonialRes` varchar(11) default NULL COMMENT '员工的婚姻状况',
  `Graduation` varchar(12) default NULL COMMENT '员工的毕业院校',
  `specialities` varchar(11) default NULL COMMENT '员工的专业',
  `qualificAtions` varchar(11) default NULL COMMENT '员工的学历',
  `zy` varchar(11) default NULL COMMENT '员工的职位',
  `workNumber` varchar(11) default NULL COMMENT '员工的工号',
  `leavedate` varchar(12) default NULL COMMENT '员工离职时间',
  `entryTime` varchar(12) default NULL COMMENT '员工的入职时间',
  `department` varchar(11) default NULL COMMENT '员工所在部门',
  `state` int(11) default NULL COMMENT '员工在职状态',
  `delstate` int(1) unsigned zerofill NOT NULL default '0' COMMENT '删除状态值',
  `present` varchar(30) default NULL,
  `contribution` varchar(50) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MEMORY DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of workdata
-- ----------------------------
