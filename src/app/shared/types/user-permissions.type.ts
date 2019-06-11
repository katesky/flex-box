export class UserFeaturePermissions {
    constructor(public id: string,
        public featureName: string,
        public permitted: string) { }
}

export class UserPermissionsResult {
    constructor(public featurePermissions: UserFeaturePermissions[],
        public status: string) { }
}