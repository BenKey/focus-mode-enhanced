cmake_minimum_required(VERSION 3.25.0)
project(FocusModeEnhanced)

set(CHROME_DIR "${CMAKE_CURRENT_BINARY_DIR}/chrome")
set(CHROME_PACKAGE_DIR "${CHROME_DIR}/package")
set(CHROME_ASSETS_STAMP "${CHROME_DIR}/.chrome_assets.stamp")
set(CHROME_ZIP_FILE "${CHROME_DIR}/focus-mode-enhanced.zip")

add_custom_command(
	OUTPUT "${CHROME_ASSETS_STAMP}"
	COMMAND ${CMAKE_COMMAND} -E make_directory "${CHROME_PACKAGE_DIR}"
	COMMAND ${CMAKE_COMMAND} -E copy_if_different
		"${CMAKE_CURRENT_SOURCE_DIR}/background.js"
		"${CHROME_PACKAGE_DIR}/background.js"
	COMMAND ${CMAKE_COMMAND} -E copy_if_different
		"${CMAKE_CURRENT_SOURCE_DIR}/manifest.json"
		"${CHROME_PACKAGE_DIR}/manifest.json"
	COMMAND ${CMAKE_COMMAND} -E copy_directory
		"${CMAKE_CURRENT_SOURCE_DIR}/css"
		"${CHROME_PACKAGE_DIR}/css"
	COMMAND ${CMAKE_COMMAND} -E copy_directory
		"${CMAKE_CURRENT_SOURCE_DIR}/images"
		"${CHROME_PACKAGE_DIR}/images"
	COMMAND ${CMAKE_COMMAND} -E touch "${CHROME_ASSETS_STAMP}"
	DEPENDS
		"${CMAKE_CURRENT_SOURCE_DIR}/background.js"
		"${CMAKE_CURRENT_SOURCE_DIR}/manifest.json"
	COMMENT "Copy Chrome extension assets to package/chrome")

add_custom_target(chrome_assets ALL DEPENDS "${CHROME_ASSETS_STAMP}")

add_custom_target(package_chrome_extension ALL
	DEPENDS ${CHROME_PACKAGE_DIR}/manifest.json
	COMMAND ${CMAKE_COMMAND} -E tar "cfv" ${CHROME_ZIP_FILE} --format=zip -- .
	WORKING_DIRECTORY ${CHROME_PACKAGE_DIR}
	COMMENT "Creating ZIP archive: ${CHROME_ZIP_FILE}")

set(FIREFOX_DIR "${CMAKE_CURRENT_BINARY_DIR}/firefox")
set(FIREFOX_PACKAGE_DIR "${FIREFOX_DIR}/package")
set(FIREFOX_ASSETS_STAMP "${FIREFOX_DIR}/.firefox_assets.stamp")
set(FIREFOX_ZIP_FILE "${FIREFOX_DIR}/focus-mode-enhanced.zip")

add_custom_command(
	OUTPUT "${FIREFOX_ASSETS_STAMP}"
	COMMAND ${CMAKE_COMMAND} -E make_directory "${FIREFOX_PACKAGE_DIR}"
	COMMAND ${CMAKE_COMMAND} -E copy_if_different
		"${CMAKE_CURRENT_SOURCE_DIR}/background.js"
		"${FIREFOX_PACKAGE_DIR}/background.js"
	COMMAND ${CMAKE_COMMAND} -E copy_if_different
		"${CMAKE_CURRENT_SOURCE_DIR}/manifest.json.firefox"
		"${FIREFOX_PACKAGE_DIR}/manifest.json"
	COMMAND ${CMAKE_COMMAND} -E copy_directory
		"${CMAKE_CURRENT_SOURCE_DIR}/css"
		"${FIREFOX_PACKAGE_DIR}/css"
	COMMAND ${CMAKE_COMMAND} -E copy_directory
		"${CMAKE_CURRENT_SOURCE_DIR}/images"
		"${FIREFOX_PACKAGE_DIR}/images"
	COMMAND ${CMAKE_COMMAND} -E touch "${FIREFOX_ASSETS_STAMP}"
	DEPENDS
		"${CMAKE_CURRENT_SOURCE_DIR}/background.js"
		"${CMAKE_CURRENT_SOURCE_DIR}/manifest.json"
	COMMENT "Copy Firefox extension assets to package/firefox")

add_custom_target(firefox_assets ALL DEPENDS "${FIREFOX_ASSETS_STAMP}")

add_custom_target(package_firefox_extension ALL
	DEPENDS ${FIREFOX_PACKAGE_DIR}/manifest.json
	COMMAND ${CMAKE_COMMAND} -E tar "cfv" ${FIREFOX_ZIP_FILE} --format=zip -- .
	WORKING_DIRECTORY ${FIREFOX_PACKAGE_DIR}
	COMMENT "Creating ZIP archive: ${FIREFOX_ZIP_FILE}")
