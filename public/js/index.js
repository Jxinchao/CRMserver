function cambiar_login() {
	document.querySelector(".cont_forms").className = "cont_forms cont_forms_active_login";
	document.querySelector(".cont_form_login").style.display = "block";
	document.querySelector(".cont_form_sign_up").style.opacity = "0";
	setTimeout(function() {
		document.querySelector(".cont_forms").style.backgroundColor = '#ccc';
		document.querySelector(".cont_form_login").style.opacity = "1";
	}, 400);
	setTimeout(function() {
		document.querySelector(".cont_form_sign_up").style.display = "none"
	}, 200)
}
function cambiar_sign_up(at) {
	document.querySelector(".cont_forms").className = "cont_forms cont_forms_active_sign_up";
	document.querySelector(".cont_form_sign_up").style.display = "block";
	document.querySelector(".cont_form_login").style.opacity = "0";
	setTimeout(function() {
		document.querySelector(".cont_form_sign_up").style.opacity = "1"
	}, 100);
	setTimeout(function() {
		document.querySelector(".cont_form_login").style.display = "none"
	}, 400)
}
function ocultar_login_sign_up() {
	document.querySelector(".cont_forms").className = "cont_forms";
	document.querySelector(".cont_form_sign_up").style.opacity = "0";
	document.querySelector(".cont_form_login").style.opacity = "0";
	setTimeout(function() {
		document.querySelector(".cont_form_sign_up").style.display = "none";
		document.querySelector(".cont_form_login").style.display = "none"
	}, 500)
}
function emlCheck() {
	var Em = document.getElementById("eml").value;
	var PromEm = document.getElementById("em");
	var regEm = /^[a-zA-Z0-9_-]{1,}@[a-zA-Z0-9_-]{1,}(\.[a-zA-Z]{2,}){1,2}$/;
	var isEm = regEm.test(Em);
	if (isEm == false) {
		PromEm.innerHTML = "您输入的E-mail地址不合法";
		PromEm.style.color = "red";
		return false
	}
	if (isEm) {
		PromEm.innerHTML = "输入正确";
		PromEm.style.color = "green";
		return true
	}
}
function pwdCheck() {
	var PW = document.getElementById("pwd").value;
	var PrompPW = document.getElementById("pw");
	if (PW == "") {
		PrompPW.innerHTML = "密码不能为空";
		PrompPW.style.color = "red";
		return false
	}
	if (PW.length < 6) {
		PrompPW.innerHTML = "密码最少为6位字符";
		PrompPW.style.color = "red";
		return false
	}
	if (PW.length > 20) {
		PrompPW.innerHTML = "密码最多只可以20位字符";
		PrompPW.style.color = "red";
		return false
	}
	var zm = /[A-z]/g;
	if (zm.test(PW) == false) {
		PrompPW.innerHTML = "密码必须包含至少一位字母";
		PrompPW.style.color = "red";
		return false
	}
	var NaN = /\d/g;
	if (NaN.test(PW) == false) {
		PrompPW.innerHTML = "密码必须包含至少一位数字";
		PrompPW.style.color = "red";
		return false
	}
	var fh = /[^A-z]\D/g;
	if (fh.test(PW) == false) {
		PrompPW.innerHTML = "密码必须包含至少一位字符";
		PrompPW.style.color = "red";
		return false
	}
	PrompPW.innerHTML = "输入正确";
	PrompPW.style.color = "green";
	return true
}
function unameCheck() {
	var UseN = document.getElementById("uname").value;
	var PromU = document.getElementById("unam");
	var regUseN = /^[\u4e00-\u9fa5_a-zA-Z0-9_]{4,10}$/;
	var isUseN = regUseN.test(UseN);
	if (UseN == "") {
		PromU.innerHTML = "用户名不能为空";
		PromU.style.color = "red";
		return false
	}
	if (isUseN) {
		PromU.innerHTML = "输入正确";
		PromU.style.color = "green";
		return true
	}
	if (!isUseN) {
		PromU.innerHTML = "请输入正确的用户名";
		PromU.style.color = "red";
		return false
	}
}
$(function() {
	var ip = '118.190.90.166:8005'
	var base = new Base64();
	$("#btn_login").click(function() {
		$.ajax({
			type: "post",
			url: ip+"/loginUp/login",
			data: {
				uname: $("#loginuname").val(),
				pwd: base.encode($("#loginpwd").val())
			},
			success: function(e) {
				if (e.flag == 1) {
					sessionStorage.user_id = e.id;
					sessionStorage.uname = $("#loginuname").val();
					window.location.href = "html/homepage.html"
				} else {
					if (e.flag == 2) {
						alert("用户名不存在")
					} else {
						if (e.flag == 3) {
							alert("密码错误")
						}
					}
				}
			},
			error: function() {
				aler("error")
			}
		})
	})
});