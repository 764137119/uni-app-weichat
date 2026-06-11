commit:
	@if [ -z "$(msg)" ]; then \
		read -p "请输入提交信息: " input_msg; \
	else \
		input_msg="$(msg)"; \
	fi; \
	git add . && git commit -m "$$input_msg"